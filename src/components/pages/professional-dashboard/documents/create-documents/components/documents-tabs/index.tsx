import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function DocumentsTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 800 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Anamnese" />
        <Tab label="ASO" />
        <Tab label="Atestado" />
        <Tab label="Comparecimento" />
        <Tab label="Laudo" />
        <Tab label="Relatório" />
        <Tab label="Receituário" />
        <Tab label="Receituário especial" />
        <Tab label="Relatório" />
        <Tab label="Solicitação de exame tipo 1" />
        <Tab label="Solicitação de exame tipo 2" />

      </Tabs>
    </Box>
  );
}
