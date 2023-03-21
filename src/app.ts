interface IArgs {
    valueLiquid: number
    percent: number
    period: number
}

function calculate(args: IArgs) {
    let periodInMonths = args.period * 12
    let amount = 0, accumulate = args.valueLiquid;

    for (let i = 0; i < periodInMonths; i++) {
        amount = (accumulate * args.percent) / 100
        accumulate += amount
    }

    return {
        acc: Number(accumulate.toFixed(2)),
        period: periodInMonths,
        fees: args.percent
    }
}

function convertNumberToCoin(coin: number) {
    const restValue = Math.floor((coin % 1) * 100)
    const finalValue = Math.trunc(coin).toLocaleString('pt-BR')

    return `R$ ${finalValue},${restValue}`
}

const grossCalculation = calculate({ valueLiquid: 100000, period: 12, percent: 0.83 })

console.log(convertNumberToCoin(grossCalculation.acc))


