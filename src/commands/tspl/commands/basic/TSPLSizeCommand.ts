import TSPLCommand from "../../TSPLCommand";
import { UnitSystem } from "../../types";

/**
 * Defines the size of the label to rpint
 * {@link /documentsions/TSPL.pdf}
 */
export default class TSPLSizeCommand extends TSPLCommand {
    private readonly width: number
    private readonly height: number
    /**
     * This controls what unit the {@link width} and {@link height} will be
     * - For imperial, the unit is inches
     * - For metric, the unit is milimeters
     * - For dots, the unit is dots
     */
    private readonly unitSystem: UnitSystem

    constructor(width: number, height: number, unitSystem: UnitSystem) {
        super()
        this.width  = width
        this.height = height
        this.unitSystem = unitSystem
    } 

    get commandString(): string {
        return `SIZE ${this.valueWithUnit(this.width)}, ${this.valueWithUnit(this.height)}`
    }

    private valueWithUnit(value: number) {
        switch(this.unitSystem) {
            case "dot": return `${value} dot`
            case "imperial": return value
            case "metric": return `${value} mm`
        }
    }
}