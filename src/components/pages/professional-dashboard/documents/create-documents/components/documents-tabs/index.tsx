import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateAnamnese from '../default-documents/anamnese';
import CreateAsoDocument from '../default-documents/aso';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export default function DocumentsTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { sm: 800 , backgroundColor: "#f3f3f3"}}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Anamnese" {...a11yProps(0)} />
        <Tab label="ASO" {...a11yProps(1)} />
        <Tab label="Atestado" {...a11yProps(2)} />
        <Tab label="Comparecimento" {...a11yProps(3)} />
        <Tab label="Laudo" {...a11yProps(4)} />
        <Tab label="Relatório" {...a11yProps(5)} />
        <Tab label="Receituário" {...a11yProps(6)} />
        <Tab label="Receituário especial" {...a11yProps(7)} />
        <Tab label="Solicitação de exame tipo 1" {...a11yProps(8)} />
        <Tab label="Solicitação de exame tipo 2" {...a11yProps(9)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CreateAnamnese />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CreateAsoDocument />
      </TabPanel>

      <TabPanel value={value} index={2}>
        Conteúdo da Aba Três
      </TabPanel>

      <TabPanel value={value} index={3}>
        Conteúdo da Aba Quatro
      </TabPanel>

      <TabPanel value={value} index={4}>
        Conteúdo da Aba Cinco
      </TabPanel>

      <TabPanel value={value} index={5}>
        Conteúdo da Aba Seis
      </TabPanel>

      <TabPanel value={value} index={6}>
        Conteúdo da Aba Sete
      </TabPanel>

      <TabPanel value={value} index={7}>
        Conteúdo da Aba Oito
      </TabPanel>

      <TabPanel value={value} index={8}>
        Conteúdo da Aba Nove
      </TabPanel>

      <TabPanel value={value} index={9}>
        Conteúdo da Aba Dez
      </TabPanel>
      
    </Box>
  );
}