import  { useCallback, useState, VFC } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

const App: VFC = () => {
  const [age, setAge] = useState<number>(19);

  const selectChange = useCallback((event: SelectChangeEvent<number>) => {
    const {value} = event.target;
    const t = typeof value === 'number' ? value: parseInt(value,10)
    setAge(t);
  },[]);


  return(
    <div className="App">
      <Box sx={{m:3}}>
        <FormControl fullWidth margin='dense'>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={selectChange}
          >
            <MenuItem value="19">ポケットモンスター ソード・シールド</MenuItem>
            <MenuItem value='20'>ポケットモンスター ブリリアントダイヤモンド・シャイニングパール</MenuItem>
            <MenuItem value='21'>Pokémon LEGENDS アルセウス</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{m:3}}>
        <TextField id="outlined-basic" fullWidth label="Outlined" variant="outlined"  margin="dense" />
      </Box>
      <Box sx={{m:3}}>
        <TextField id="filled-basic" fullWidth label="Filled" variant="filled"  margin="dense" />
      </Box>
      <Box sx={{m:3}}>
        <TextField id="standard-basic" fullWidth label="Standard" variant="standard"  margin="dense" />
      </Box>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default App
