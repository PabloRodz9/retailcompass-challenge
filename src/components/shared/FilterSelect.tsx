import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Option {
    label: string;
    value: string;
}

interface FilterSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
}

const FilterSelect = ({ label, value, onChange, options }: FilterSelectProps) => {
    const id = `select-${label}`;

    return (
        <FormControl fullWidth>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FilterSelect;
