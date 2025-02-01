class PsalmDisplay {
    constructor() {
        this.psalm = `<p>If you <span>dwell</span> in the secret place of the Most High,

You shall <span>abide</span> under the shadow of the Almighty.

I will <span>say</span> of the Lord, "He is my refuge and my fortress,

My God, in whom I <span>trust</span>."

Surely He shall <span>deliver</span> you from the snare of the fowler,
And from the perilous <span>pestilence</span>.
He shall cover you with His <span>feathers</span>,
And under His wings, you shall <span>take refuge</span>;
His truth shall be your <span>shield</span> and buckler.

You shall not be afraid of the <span>terror</span> by night,
Nor of the arrow that <span>flies</span> by day,
Nor of the pestilence that <span>walks</span> in darkness,
Nor of the destruction that lays waste at noonday.

A thousand may <span>fall</span> at your side,
And ten thousand at your right hand;
But it shall not come near you.
Only with your <span>eyes</span> shall you look,
And see the reward of the wicked.

Because you have made the Lord, who is my <span>refuge</span>,
Even the Most High, your dwelling place,
No evil shall <span>befall</span> you,
Nor shall any plague come near your <span>dwelling</span>;

For He shall give His angels <span>charge</span> over you,
To keep you in all your <span>ways</span>.
In their hands, they shall <span>bear</span> you up,
Lest you dash your foot against a <span>stone</span>.

You shall <span>tread</span> upon the lion and the cobra,
The young lion and the serpent you shall <span>trample</span> underfoot.
"Because he has set his love upon Me, I will <span>deliver</span> him;
I will set him on high, because he has <span>known</span> My name.

He shall <span>call</span> upon Me, and I will <span>answer</span> him;
I will be with him in trouble;
I will <span>deliver</span> him and honor him.
With long life, I will <span>satisfy</span> him,
And show him My <span>salvation</span>."</p>`;

        this.isMobile = false;
        this.isTablet = false;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.detectDevice();
        this.insertPsalmText();
        this.setupResponsiveness();
        this.setupEventListeners();
        this.optimizeForDevice();
    }

    detectDevice() {
        const width = window.innerWidth;
        this.isMobile = width <= 480;
        this.isTablet = width > 480 && width <= 768;
    }

    insertPsalmText() {
        const textDivs = document.querySelectorAll('.text');
        textDivs.forEach(div => {
            div.innerHTML = this.psalm;
            // Add data-rendered attribute to prevent double rendering
            div.setAttribute('data-rendered', 'true');
        });
    }

    setupResponsiveness() {
        const containerFull = document.querySelector('.container-full');
        const content = document.querySelector('.content');

        if (this.isMobile) {
            // Mobile-specific adjustments
            containerFull.style.transform = 'scale(0.6)';
            content.style.borderRadius = '20px';
        } else if (this.isTablet) {
            // Tablet-specific adjustments
            containerFull.style.transform = 'scale(0.8)';
            content.style.borderRadius = '30px';
        }

        // Adjust cube size based on viewport
        this.adjustCubeSize();
    }

    adjustCubeSize() {
        const cubes = document.querySelectorAll('.cube');
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        cubes.forEach(cube => {
            if (this.isMobile) {
                cube.style.height = '12vh';
                cube.style.width = '87vw';
            } else if (this.isTablet) {
                cube.style.height = '15vh';
                cube.style.width = '87vw';
            } else {
                // Desktop sizing
                cube.style.height = '19vh';
                cube.style.width = '870px';
            }
        });
    }

    optimizeForDevice() {
        // Optimize animations for better performance on mobile
        if (this.isMobile || this.isTablet) {
            document.querySelectorAll('.animated').forEach(el => {
                el.style.animationDuration = '12s'; // Shorter animation duration
            });

            // Reduce blur effect on mobile for better performance
            document.querySelector('.boyImage').style.animation =
                this.isMobile ? '200s linear infinite blur-light' : '200s linear infinite blur';
        }

        // Adjust reflection container position
        const reflectContainer = document.querySelector('.container-reflect');
        if (reflectContainer) {
            reflectContainer.style.marginTop = this.isMobile ? '35vh' :
                this.isTablet ? '40vh' : '380px';
        }
    }

    setupEventListeners() {
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.detectDevice();
                this.setupResponsiveness();
                this.optimizeForDevice();
            }, 250); // Wait for resize to finish before updating
        });

        // Handle orientation changes
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.detectDevice();
                this.setupResponsiveness();
                this.optimizeForDevice();
            }, 100);
        });

        // Handle visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.optimizeForDevice();
            }
        });
    }
}

// Initialize the application
const psalmDisplay = new PsalmDisplay();