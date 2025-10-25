import { useRef, useEffect } from "react";

const SquareAutomaton = ({reversed = false}: {reversed: boolean}) => {
    const canvasRef = useRef(null);
    const squareSize = window.innerWidth > 700 ? 5 : 3;
    const frameRate = 7;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // @ts-expect-error:
        const ctx = canvas.getContext("2d");
        // @ts-expect-error:
        const width: number = canvas.width = window.innerWidth;
        // @ts-expect-error:
        const height: number = canvas.height = Math.min(400, Math.max(150, Math.round(window.innerHeight / 3)));

        const hCount: number = Math.floor(width / squareSize);
        const vCount: number = Math.floor(height / squareSize);

        const randomHSL = (j: number): string => {
            const row = reversed ? vCount - j : j;
            const coef = (row / vCount) * 2 * (1 - Math.random());
            const currentMin = (row / vCount * 0.9) * 115;
            const lum = Math.max(currentMin, coef * 100);
            const h = 170 + Math.random() * 50;
            const s = Math.random() * 10;
            return `hsl(${h}deg, ${s}%, ${lum}%)`;
        };

        const draw = () => {
            ctx.fillStyle = "hsl(0, 0%, 86%)";
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i <= hCount; i++) {
                for (let j = 0; j <= vCount; j++) {
                    ctx.fillStyle = randomHSL(j);
                    ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
                }
            }
        };
        const interval = setInterval(draw, 1000 / frameRate);
        draw();

        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} style={{ display: "block", zIndex: -10, position: "relative" }} />;
};

export default SquareAutomaton;
