// import './scene.css';

const WavingHand = () => (
    <div
        style={{

            marginBottom: '-20px',
            marginRight: '-45px',
            paddingBottom: '20px',
            paddingRight: '45px',
            display: 'inline-block',

        }}
        animate={{ rotate: 20 }}
        transition={{
            yoyo: Infinity,
            from: 0,
            duration: 0.2,
            ease: 'easeInOut',
            type: 'tween',
        }}
    >
        👋
    </div>
);

const Hi = () => (
    <h5>
        <WavingHand />
    </h5>
);

export default Hi;