var ctx: CanvasRenderingContext2D | null;


export default function createSegmentDisplay() {
    const canvas: HTMLCanvasElement = document.getElementById("segmentDisplayCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    const gap: number = 3;

    // Display segments
    createHexagon(180, 10, 24, 8, "horizontal")  // Segment A
    createHexagon(212 + gap, 18 - gap, 24, 8, "vertical")  // Segment B
    createHexagon(212 + gap, 50 + gap, 24, 8, "vertical")  // Segment C
    createHexagon(180, 90, 24, 8, "horizontal")  // Segment D
    createHexagon(180 - gap, 18 - gap, 24, 8, "vertical")  // Segment E
    createHexagon(180 - gap, 50 + gap, 24, 8, "vertical")  // Segment F
    createHexagon(180, 50, 24, 8, "horizontal")  // Segment G
}

const createHexagon = (x: number, y: number, w: number, h: number, dir: string) => {
    if (ctx != null) {
        ctx.fillStyle = "red"
        // Every lineTo call is called from the most recently called moveTo function
        // This means that the 2nd lineTo has to contain the movements of 1st lineTo as well etc. etc.
        if (dir === "horizontal") {
            // Get the width length if we want to have a 45 angle segment
            const w45: number = calculateSegmentWidth(w, h)
            console.log(w45)

            ctx.moveTo(x, y)
            ctx.lineTo(x + 0.5 * h, y - 0.5 * h)
            ctx.lineTo(x + 0.5 * h + w, y - 0.5 * h)
            ctx.lineTo(x + w + h, y)
    
            ctx.lineTo(x + 0.5 * h + w, y + 0.5 * h)
            ctx.lineTo(x + 0.5 * h, y + 0.5 * h)
            ctx.lineTo(x, y)
            ctx.fill()
        }
        else if (dir === "vertical") {
            ctx.moveTo(x, y)
            ctx.lineTo(x + 0.5 * h, y + 0.5 * h)
            ctx.lineTo(x + 0.5 * h, y + w + 0.5 * h)
            ctx.lineTo(x, y + w + h)
            
            ctx.lineTo(x - 0.5 * h, y + w + 0.5 * h)
            ctx.lineTo(x - 0.5 * h, y + 0.5 * h)
            ctx.lineTo(x, y)

            ctx.stroke()
        }
    }
}

const calculateSegmentWidth = (w: number, h: number) => {
    return Math.acos(1)
}