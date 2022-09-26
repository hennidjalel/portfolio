    import { motion } from 'framer-motion';
    // import './scene.css';

    const WavingHand = () => (
    <motion.div
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
    </motion.div>
    );

    const Hi = () => (
    <h5>
        <WavingHand /> 
    </h5>
    );

    export default Hi;