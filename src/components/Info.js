import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import bgImage from '../assets/background.avif'; 

const Root = styled('div')({
  backgroundImage: `url(${bgImage})`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '4rem', 
  paddingBottom: '4rem', 
});

const ContentWrapper = styled(Paper)({
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  color: '#ffffff', 
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '900px',
  width: '100%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
});

const Heading = styled(Typography)({
  marginBottom: '1rem',
  color: '#ffffff',
  fontSize: '2rem',
  fontWeight: 'bold',
});

const SubHeading = styled(Typography)({
  marginBottom: '0.75rem',
  color: '#f44336', 
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid #444',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const StyledTable = styled(Table)({
  marginTop: '1rem',
  borderCollapse: 'separate',
  borderSpacing: '0 10px',
});

const TableHeader = styled(TableHead)({
  backgroundColor: '#333',
});

const TableCellHead = styled(TableCell)({
  color: '#ffffff',
  fontWeight: 'bold',
});

const TableCellBody = styled(TableCell)({
  color: '#ddd',
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const Info = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Heading variant="h1" component="h1" gutterBottom>
            Blood Donation: Essential Information
          </Heading>
          <Tabs value={value} onChange={handleChange} aria-label="info tabs" variant="fullWidth">
            <Tab label="Who Can Donate Blood?" id="tab-0" aria-controls="tabpanel-0" />
            <Tab label="How It Works" id="tab-1" aria-controls="tabpanel-1" />
            <Tab label="How Long Does It Last?" id="tab-2" aria-controls="tabpanel-2" />
            <Tab label="Why Donate Blood?" id="tab-3" aria-controls="tabpanel-3" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <SubHeading variant="h2" component="h2">
              Who Can Donate Blood?
            </SubHeading>
            <Typography paragraph>
              Blood donation is a critical and life-saving act, but not everyone is eligible to donate. Here are the general criteria for blood donation:
            </Typography>
            <List>
              {[
                "Age: Donors should be at least 17 years old. In some regions, 16-year-olds can donate with parental consent.",
                "Weight: Donors typically need to weigh at least 110 pounds (50 kg) to ensure they can safely donate blood.",
                "Health: Donors should be in good health and feel well on the day of donation. They should not have any chronic illnesses that could affect their health or the safety of the blood donation.",
                "Medications: Some medications may disqualify you from donating. It’s best to consult with the blood donation center about any medications you are taking.",
                "Travel History: Recent travel to areas with certain diseases may affect eligibility. Blood donation centers will provide specific guidelines.",
                "Recent Procedures: Certain recent medical procedures or surgeries may require a waiting period before you can donate."
              ].map((text, index) => (
                <StyledListItem key={index}>
                  <ListItemText primary={text} />
                </StyledListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <SubHeading variant="h2" component="h2">
              How It Works?
            </SubHeading>
            <Typography paragraph>
              The blood donation process is straightforward and designed to ensure donor and recipient safety:
            </Typography>
            <List>
              {[
                "Registration: When you arrive at the donation center, you’ll complete a registration form and provide some personal information.",
                "Health Screening: You’ll undergo a brief health screening to ensure you meet the eligibility criteria. This includes answering questions about your health, travel history, and lifestyle.",
                "Donation: The actual donation process takes about 8-10 minutes. A needle is inserted into your vein (usually in your arm) to collect a unit of blood. The process is generally painless and involves minimal discomfort.",
                "Post-Donation: After donating, you’ll be asked to rest for a few minutes and have a snack to help your body recover. The donation center will monitor you to ensure you’re feeling well before you leave."
              ].map((text, index) => (
                <StyledListItem key={index}>
                  <ListItemText primary={text} />
                </StyledListItem>
              ))}
            </List>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <SubHeading variant="h2" component="h2">
              How Long Does It Last?
            </SubHeading>
            <Typography paragraph>
              The blood you donate is carefully processed and tested to ensure its safety before being used. Here’s what happens to your donation:
            </Typography>
            <TableContainer>
              <StyledTable>
                <TableHeader>
                  <TableRow>
                    <TableCellHead>Step</TableCellHead>
                    <TableCellHead>Description</TableCellHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { step: "Processing", description: "The blood is separated into its components (red cells, plasma, platelets, etc.) so that it can be used for different medical needs." },
                    { step: "Testing", description: "The blood is tested for various diseases and infections to ensure it is safe for transfusion." },
                    { step: "Storage", description: "Blood components are stored in controlled conditions. Red blood cells are usually stored for up to 42 days, while platelets last for about 5 days. Plasma can be frozen and stored for up to a year." }
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCellBody>{row.step}</TableCellBody>
                      <TableCellBody>{row.description}</TableCellBody>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
            <Typography paragraph>
              Blood donations are vital and can save multiple lives. The donation process is safe, and your contribution helps patients in need of blood transfusions due to surgeries, trauma, cancer treatments, and other medical conditions.
            </Typography>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <SubHeading variant="h2" component="h2">
              Why Donate Blood?
            </SubHeading>
            <List>
              {[
                "Save Lives: Your donation can help up to three people in need of blood.",
                "Emergency Preparedness: Blood is always needed for emergencies and unexpected medical situations.",
                "Community Impact: Donating blood is a way to contribute positively to your community and help those in critical need."
              ].map((text, index) => (
                <StyledListItem key={index}>
                  <ListItemText primary={text} />
                </StyledListItem>
              ))}
            </List>
            <Typography paragraph>
              By donating blood, you’re making a significant and positive impact on the lives of others. Your generosity can help ensure that there is always a safe and reliable supply of blood for those who need it most.
            </Typography>
          </TabPanel>
        </ContentWrapper>
      </Container>
    </Root>
  );
};

export default Info;
