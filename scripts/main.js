class PsalmDisplay {
    constructor() {
        this.psalm = `<p>If you <span>dwell</span> in the secret place of the Most High,

You shall <span>abide</span> under the shadow of the Almighty.

I will <span>say</span> of the Lord, “He is my refuge and my fortress,

My God, in whom I <span>trust</span>.”

Surely He shall <span>deliver</span> you from the snare of the fowler,
And from the perilous <span>pestilence</span.
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
“Because he has set his love upon Me, I will <span>deliver</span> him;
I will set him on high, because he has <span>known</span> My name.

He shall <span>call</span> upon Me, and I will <span>answer</span> him;
I will be with him in trouble;
I will <span>deliver</span> him and honor him.
With long life, I will <span>satisfy</span> him,
And show him My <span>salvation</span>.”</p>`;

        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.insertPsalmText();
            this.setupResponsiveness();
        });
    }

    insertPsalmText() {
        const textDivs = document.querySelectorAll('.text');
        textDivs.forEach(div => div.innerHTML = this.psalm);
    }

    setupResponsiveness() {
        const contentDiv = document.querySelector('.content');
        const handleResize = () => {
            const viewportWidth = window.innerWidth;
            const baseWidth = 1000;
            const scaleFactor = viewportWidth < baseWidth
                ? (viewportWidth / baseWidth) * 0.8
                : 1;
            contentDiv.style.transform = `scale(${scaleFactor})`;
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call
        window.addEventListener('orientationchange', function () {
            // Adjust layout or reload page on orientation change
            location.reload();
        });
    }
}

// Initialize the application
new PsalmDisplay();