var ctx: CanvasRenderingContext2D | null;


export default function createSegmentDisplay() {
    const canvas: HTMLCanvasElement = document.getElementById("segmentDisplayCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    const canvasHeight: number = canvas.height;
    const canvasWidth: number = canvas.width;
    const gap: number = 1;
    const gapBetweenNums: number = 10;
    const height: number = 6;
    const width: number = 18;
    const hexWidth: number = (width + height);

    // Display segments
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight - hexWidth - 2 * gap, width, height, "horizontal")  // Segment A
    createHexagon(0.5 * canvasWidth - gapBetweenNums + gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical")  // Segment B
    createHexagon(0.5 * canvasWidth - gapBetweenNums + gap, 0.5 * canvasHeight + gap, width, height, "vertical")  // Segment C
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight + hexWidth + 2 * gap, width, height, "horizontal")  // Segment D
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums - gap, 0.5 * canvasHeight + gap, width, height, "vertical")  // Segment E
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums - gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical")  // Segment F
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight, width, height, "horizontal")  // Segment G

    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight - hexWidth - 2 * gap, width, height, "horizontal")  // Segment A
    createHexagon(0.5 * canvasWidth + hexWidth + gapBetweenNums + gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical")  // Segment B
    createHexagon(0.5 * canvasWidth + hexWidth + gapBetweenNums + gap, 0.5 * canvasHeight + gap, width, height, "vertical")  // Segment C
    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight + hexWidth + 2 * gap, width, height, "horizontal")  // Segment D
    createHexagon(0.5 * canvasWidth + gapBetweenNums - gap, 0.5 * canvasHeight + gap, width, height, "vertical")  // Segment E
    createHexagon(0.5 * canvasWidth + gapBetweenNums - gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical")  // Segment F
    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight, width, height, "horizontal")  // Segment G
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