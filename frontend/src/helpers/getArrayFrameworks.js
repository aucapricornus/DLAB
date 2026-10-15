export const getArrayFrameworks = (props, arrayFrameworks) => {
    let options = arrayFrameworks;

    if (props.values?.frameworksLv1) {
        options = options.filter(({ value }) =>
            !props.values.frameworksLv1
                .map(({ value }) => value)
                .includes(value));
    }

    if (props.values?.frameworksLv1 && props.values?.frameworksLv2) {
        options = options.filter(({ value }) =>
            !props.values.frameworksLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.frameworksLv2
                .map(({ value }) => value)
                .includes(value))
    }

    if (props.values?.frameworksLv1 && props.values?.frameworksLv2 && props.values?.frameworksLv3) {
        options = options.filter(({ value }) =>
            !props.values.frameworksLv1
                .map(({ value }) => value)
                .includes(value)
            && !props.values.frameworksLv2
                .map(({ value }) => value)
                .includes(value)
            && !props.values.frameworksLv3
                .map(({ value }) => value)
                .includes(value))
    }

    return options;
}