import Select from 'react-select'

const customStyles = {
    input: (base) => ({
        ...base,
        'input:focus': {
            boxShadow: 'none',
        },
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#e5e5e5',
        borderRadius: '5px',
        padding: '5px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#4B5563',
        fontWeight: '500',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#000000',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#e66063',
        },
    })
}

export const SelectorMulti = ({ field, form, options, placeholder }) => {
    const handleChange = (selectedOptions) => {
        form.setFieldValue(field.name, selectedOptions);
    }

    return (
        <div className='my-2'>
            <Select
                {...field}
                isMulti
                options={options}
                styles={customStyles}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {
                field.name in form.errors && (
                    <div className="text-red-600 mt-2 ml-2 text-xs">
                        {form.errors[field.name]}
                    </div>
                )
            }
        </div>
    )
}
