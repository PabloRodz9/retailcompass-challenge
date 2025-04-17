import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface Option {
    label: string;
    value: string;
}

interface FilterSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[]
    fullWidth?: boolean;
    sx?: object;
}

export default function FilterSelect({
    label,
    value,
    onChange,
    options,
    fullWidth = true,
    sx = {},
}: FilterSelectProps) {
    return (
        <FormControl fullWidth={fullWidth} sx={{ mb: 2, ...sx }}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                label={label}
                onChange={(e: SelectChangeEvent) => onChange(e.target.value)}
            >
                {(options as Option[]).map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
