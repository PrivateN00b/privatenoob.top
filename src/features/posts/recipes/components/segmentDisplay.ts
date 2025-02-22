var ctx: CanvasRenderingContext2D | null;


export default function createSegmentDisplay() {
    const canvas: HTMLCanvasElement = document.getElementById("segmentDisplayCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    const canvasWidth: number = canvas.width;
    const gap: number = 3;
    const gapBetweenNums: number = 3;
    const height: number = 6;
    const width: number = 18;

    // Display segments
    createHexagon(2 * (width + height) - gapBetweenNums, 10, width, height, "horizontal")  // Segment A
    createHexagon(2 * (width + height) - gapBetweenNums + width + height + gap, 10 + height - gap, width, height, "vertical")  // Segment B
    createHexagon(2 * (width + height) - gapBetweenNums + width + height + gap, 10 + 5 * height + gap, width, height, "vertical")  // Segment C
    createHexagon(2 * (width + height) - gapBetweenNums, 10 + 10 * height, width, height, "horizontal")  // Segment D
    createHexagon(2 * (width + height) - gapBetweenNums  - gap, 10 + height - gap, width, height, "vertical")  // Segment E
    createHexagon(2 * (width + height) - gapBetweenNums  - gap, 10 + 5 * height + gap, width, height, "vertical")  // Segment F
    createHexagon(2 * (width + height) - gapBetweenNums, 10 + 5 * height, width, height, "horizontal")  // Segment G

    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums, 10, width, height, "horizontal")  // Segment A
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums + width + height + gap, 10 + height - gap, width, height, "vertical")  // Segment B
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums + width + height + gap, 10 + 5 * height + gap, width, height, "vertical")  // Segment C
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums, 10 + 10 * height, width, height, "horizontal")  // Segment D
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums  - gap, 10 + height - gap, width, height, "vertical")  // Segment E
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums  - gap, 10 + 5 * height + gap, width, height, "vertical")  // Segment F
    createHexagon(canvasWidth - 3 * (width + height) + gapBetweenNums, 10 + 5 * height, width, height, "horizontal")  // Segment G
}

const createHexagon = (x: number, y: number, w: number, h: number, dir: string) => {
    if (ctx != null) {
        ctx.fillStyle = "#fd5800"
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