export const getArrayLenguages = (props, arrayLenguages) => {
    let options = arrayLenguages;

    if (props.values?.lenguagesLv1) {
        options = options.filter(({ value }) =>
            !props.values.lenguagesLv1
                .map(({ value }) => value)
                .includes(value)
        )
    }

    if (props.values?.lenguagesLv1 && props.values?.lenguagesLv2) {
        options = options.filter(({ value }) =>
            !props.values.lenguagesLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.lenguagesLv2
                .map(({ value }) => value)
                .includes(value))
    }

    if (props.values?.lenguagesLv1 && props.values?.lenguagesLv2 && props.values?.lenguagesLv3) {
        options = options.filter(({ value }) =>
            !props.values.lenguagesLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.lenguagesLv2
                .map(({ value }) => value)
                .includes(value)
            && !props.values.lenguagesLv3
                .map(({ value }) => value)
                .includes(value))
    }

    return options;
}