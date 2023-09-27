const playField = (f) => {
  let playfield = `
  --== TIC   TAC   TOE ==-- 
  |     -------------     |
  |     | ${f[6]} | ${f[7]} | ${f[8]} |     |
  |     -------------     |
  |     | ${f[3]} | ${f[4]} | ${f[5]} |     |
  |     -------------     |
  |     | ${f[0]} | ${f[1]} | ${f[2]} |     |
  |     -------------     |
  --== TIC   TAC   TOE ==--
  `;
  console.log(playfield);
}

export default playField;