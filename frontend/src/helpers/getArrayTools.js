export const getArrayTools = (props, arrayTools) => {
    let options = arrayTools;

    if (props.values?.toolsLv1) {
        options = options.filter(({ value }) => !props.values.toolsLv1
            .map(({ value }) => value)
            .includes(value))
    }

    if (props.values?.toolsLv1 && props.values?.toolsLv2) {
        options = options.filter(({ value }) =>
            !props.values.toolsLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.toolsLv2
                .map(({ value }) => value)
                .includes(value))
    }

    if (props.values?.toolsLv1 && props.values?.toolsLv2 && props.values?.toolsLv3) {
        options = options.filter(({ value }) =>
            !props.values.toolsLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.toolsLv2
                .map(({ value }) => value)
                .includes(value)
            && !props.values.toolsLv3
                .map(({ value }) => value)
                .includes(value))
    }

    return options;
}