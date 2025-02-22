var ctx: CanvasRenderingContext2D | null;


export default function createSegmentDisplay() {
    const canvas: HTMLCanvasElement = document.getElementById("segmentDisplayCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");

    // Segment A
    createHexagon(200, 10, 20, 6)
}

const createHexagon = (x: number, y: number, w: number, h: number) => {
    if (ctx != null) {
        // Every lineTo call is called from the most recently called moveTo function
        // This means that the 2nd lineTo has to contain the movements of 1st lineTo as well etc. etc.
        ctx.fillStyle = "red"
        ctx.moveTo(x, y)
        ctx.lineTo(x + 0.25 * w, y - 0.5 * h)
        ctx.lineTo(x + 1.25 * w, y - 0.5 * h)  // X: x + 0.25 * w + w | Y: y - 0.5 * h
        ctx.lineTo(x + 1.5 * w, y)  // X: x + 0.25 * w + w + 0.25 * w | Y: y - 0.5 * h + 0.5 * h

        ctx.lineTo(x + 1.25 * w, y + 0.5 * h)
        ctx.lineTo(x + 0.25 * w, y + 0.5 * h)
        ctx.lineTo(x, y)
        ctx.fill()
    }
}