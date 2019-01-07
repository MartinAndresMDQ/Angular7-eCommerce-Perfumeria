
import { Pipe } from '@angular/core'

@Pipe({
    name: 'trueFalse', pure: true
})
export class TrueFalse {
    transform(value: any, args: string[]): any {
        let lala = "k-icon k-i-close-outline"
        if (value)
            lala = "k-icon k-i-check-outline"
        return lala;
    }
}