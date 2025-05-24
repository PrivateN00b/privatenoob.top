import { rgb } from "polished";

var ctx: CanvasRenderingContext2D | null;
const onCol: string = "#fd5800";
const offCol: string = "#200c00";
const glowCol: string = rgb(180, 66, 0);
const glowIntensity: number = 10;
console.log(onCol, offCol)
// This is how each segment lights up depending on the number
const Numbers: {[key: number]: number[]} = {
    //  A  B  C  D  E  F  G
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
}

export default function createSegmentDisplay(portion: string) {
    const canvas: HTMLCanvasElement = document.getElementById("segmentDisplayCanvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    const canvasHeight: number = canvas.height;
    const canvasWidth: number = canvas.width;
    const gap: number = 1;
    const gapBetweenNums: number = 12;
    const height: number = 6;
    const width: number = 18;
    const hexWidth: number = (width + height);
    let tens: number = 0;
    let ones: number = 0;
    
    // Clearing the canvas if it's being redrawn
    ctx?.clearRect(0, 0, canvasWidth, canvasHeight)

    // Handle if portion size goes under 1.0
    if (portion.length == 1) {
        ones = Number.parseInt(portion[0]);
    } 
    else {
        tens = Number.parseInt(portion[0]);
        ones = Number.parseInt(portion[1]);
    }

    // Display tens
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight - hexWidth - 2 * gap, width, height, "horizontal", Numbers[tens][0])  // Segment A
    createHexagon(0.5 * canvasWidth - gapBetweenNums + gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical", Numbers[tens][1])  // Segment B
    createHexagon(0.5 * canvasWidth - gapBetweenNums + gap, 0.5 * canvasHeight + gap, width, height, "vertical", Numbers[tens][2])  // Segment C
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight + hexWidth + 2 * gap, width, height, "horizontal", Numbers[tens][3])  // Segment D
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums - gap, 0.5 * canvasHeight + gap, width, height, "vertical", Numbers[tens][4])  // Segment E
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums - gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical", Numbers[tens][5])  // Segment F
    createHexagon(0.5 * canvasWidth - hexWidth - gapBetweenNums, 0.5 * canvasHeight, width, height, "horizontal", Numbers[tens][6])  // Segment G
   
    // Display dot
    createDot(0.5 * canvasWidth, 0.5 * canvasHeight + hexWidth + 2 * gap, 4)

    // Display ones
    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight - hexWidth - 2 * gap, width, height, "horizontal", Numbers[ones][0])  // Segment A
    createHexagon(0.5 * canvasWidth + hexWidth + gapBetweenNums + gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical", Numbers[ones][1])  // Segment B
    createHexagon(0.5 * canvasWidth + hexWidth + gapBetweenNums + gap, 0.5 * canvasHeight + gap, width, height, "vertical", Numbers[ones][2])  // Segment C
    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight + hexWidth + 2 * gap, width, height, "horizontal", Numbers[ones][3])  // Segment D
    createHexagon(0.5 * canvasWidth + gapBetweenNums - gap, 0.5 * canvasHeight + gap, width, height, "vertical", Numbers[ones][4])  // Segment E
    createHexagon(0.5 * canvasWidth + gapBetweenNums - gap, 0.5 * canvasHeight - hexWidth - gap, width, height, "vertical", Numbers[ones][5])  // Segment F
    createHexagon(0.5 * canvasWidth + gapBetweenNums, 0.5 * canvasHeight, width, height, "horizontal", Numbers[ones][6])  // Segment G
}

const createHexagon = (x: number, y: number, w: number, h: number, dir: string, isOn: number) => {
    if (ctx != null) {
        ctx.fillStyle = isOn == 1 ? onCol : offCol;
   
        // Create the sick ass glow effect
        if (isOn) {
            ctx.shadowBlur = glowIntensity;
            ctx.shadowColor = glowCol;
        } else {
            ctx.shadowBlur = 0;
            ctx.shadowColor = "transparent";
        }

        // Every lineTo call is called from the most recently called moveTo function
        // This means that the 2nd lineTo has to contain the movements of 1st lineTo as well etc. etc.
        if (dir === "horizontal") {
            ctx.beginPath();
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
            ctx.beginPath();
            ctx.moveTo(x, y)
            ctx.lineTo(x + 0.5 * h, y + 0.5 * h)
            ctx.lineTo(x + 0.5 * h, y + w + 0.5 * h)
            ctx.lineTo(x, y + w + h)
            
            ctx.lineTo(x - 0.5 * h, y + w + 0.5 * h)
            ctx.lineTo(x - 0.5 * h, y + 0.5 * h)
            ctx.lineTo(x, y)
            ctx.fill()
        }
    }
}

const createDot = (x: number, y: number, r: number) => {
    if (ctx != null) {
        // Create the sick ass glow effect
        ctx.shadowBlur = glowIntensity;
        ctx.shadowColor = glowCol;

        ctx.fillStyle = onCol;
        // Every lineTo call is called from the most recently called moveTo function
        // This means that the 2nd lineTo has to contain the movements of 1st lineTo as well etc. etc.
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill()
    }
}