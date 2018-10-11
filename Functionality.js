
// module.exports= {
//   users,
//   newUser,
//   userEmail,
//   notfound
// }


// const Senators =  require('./senators')

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// const allOfThem = () => {
//   return Senators
// }

// const filterByParty = (party) => {
//   return Senators.filter(x => x.party == capitalizeFirstLetter(party))
// }

// const filterByGender = (gender) => {
//   return Senators.filter(x => x.person.gender == gender.toLowerCase());
// }

// const filterByState = (state = 'UT') => {
//   return Senators.filter(sen => sen.state == state.toUpperCase());
// }

// const mapping = () => {
//   return Senators.map(x => ({firstName: x.person.firstname, lastName: x.person.lastname,party:x.party, gender: x.person.gender }));
// }

// const birthplaceSeniorSenator = () => {
//   return Senators.reduce( (previous, sen) => (sen.senator_rank == "senior" && sen.state == "UT") ? sen : previous);
// }

// module.exports = {
//   allOfThem,
//   filterByParty,
//   filterByGender,
//   filterByState,
//   mapping,
//   birthplaceSeniorSenator,
// }
