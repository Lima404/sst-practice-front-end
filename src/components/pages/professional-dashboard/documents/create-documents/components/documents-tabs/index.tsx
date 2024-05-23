import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateAnamnese from '../default-documents/anamnese';
import CreateStatements from '../default-documents/declaracao';
import CreateExameTypeTwoDocuments from '../default-documents/exame-2';
import CreateEspecialDocuments from '../default-documents/receituario-especial';
import CreateAsoDocuments from '../default-documents/aso';
import CreateExameTypeOneDocuments from '../default-documents/exame-1';

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
        <Tab label="Declarações" {...a11yProps(2)} />
        <Tab label="Receituário especial" {...a11yProps(3)} />
        <Tab label="Solicitação de exame tipo 1" {...a11yProps(4)} />
        <Tab label="Solicitação de exame tipo 2" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CreateAnamnese />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <CreateAsoDocuments />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <CreateStatements />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <CreateEspecialDocuments />
      </TabPanel>

      <TabPanel value={value} index={4}>
        <CreateExameTypeOneDocuments />
      </TabPanel>

      <TabPanel value={value} index={5}>
        <CreateExameTypeTwoDocuments />
      </TabPanel>
    </Box>
  );
}