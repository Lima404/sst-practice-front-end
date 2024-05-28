import React, { useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './index.css'; 

interface CheckboxProps {
  name: string;
  control: Control<any>;
  label: string;
}

const RHFCheckbox: React.FC<CheckboxProps> = ({ name, control, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkbox-item">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={isChecked}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  setIsChecked(e.target.checked);
                }}
              />
            }
            label={label}
          />
        )}
      />
    </div>
  );
};

export default RHFCheckbox;
