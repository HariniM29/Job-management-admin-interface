'use client';

import {
  Group,
  TextInput,
  Select,
  RangeSlider,
  Box,
  Text,
} from '@mantine/core';

import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar({ filters, setFilters }: any) {
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Group position="apart" mb="lg" spacing="md" wrap="wrap">
      <TextInput
        placeholder="Search by Job Title, Role"
        name="title"
        value={filters.title}
        onChange={handleFilterChange}
        leftSection={<SearchIcon fontSize="small" />}
        leftSectionWidth={40}
        radius="md"
        style={{ flexGrow: 1 }}
      />

      <TextInput
        placeholder="Preferred Location"
        name="location"
        value={filters.location}
        onChange={handleFilterChange}
        leftSection={<LocationOnOutlinedIcon fontSize="small" />}
        leftSectionWidth={40}
        radius="md"
        style={{ flexGrow: 1 }}
      />

      {/* <Select
        placeholder="Job type"
        name="jobType"
        data={['Full-time', 'Part-time', 'Contract', 'Internship']}
        value={filters.jobType}
        onChange={(value) =>
          setFilters({ ...filters, jobType: value || '' })
        }
        leftSection={<PersonOutlineIcon fontSize="small" />}
        leftSectionWidth={40}
        radius="md"
        style={{ flexGrow: 1 }}
      /> */}
 <Select
        placeholder="Job type"
        data={[
           { value: '', label: 'All' }, 
          { value: 'FullTime', label: 'Full-time' },
          { value: 'PartTime', label: 'Part-time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
        ]}
        value={filters.jobType}
        onChange={(value) => setFilters({ ...filters, jobType: value || '' })}
        leftSection={<PersonOutlineIcon fontSize="small" />}
        leftSectionWidth={40}
        radius="md"
        style={{ flexGrow: 1 }}
      />
      <Box style={{ flexGrow: 1, minWidth: 250 }}>
        <Group position="apart" mb={4}>
          <Text size="sm" fw={500} c="black">
            Salary Per Month
          </Text>
          <Text size="sm" fw={500} c="black">
            ₹{filters.salaryRange[0] / 1000}k - ₹{filters.salaryRange[1] / 1000}k
          </Text>
        </Group>

     <RangeSlider
  min={0}
  max={100000}
  step={5000}
  value={filters.salaryRange}
  onChange={(range) => setFilters({ ...filters, salaryRange: range })}
  radius="md"
  styles={{
    track: {
      backgroundColor: '#ccc',
    },
    bar: {
      backgroundColor: 'black',
    },
    thumb: {
      borderColor: 'black',
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: '#222',
        borderColor: '#222',
      },
    },
  }}
/>

      </Box>
    </Group>
  );
}
