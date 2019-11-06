/*
Now that you've squashed all the bugs in the city's new voting software,
it's time to jump back on the campaign trail. The election is coming up soon!
You need to send out reminders to all Codeville citizens to encourage them
to vote, but you don't want to spam people who have already registered.
Use JavaScript to remove all registered voters from your contact list.

Instructions
Complete the function registerToVote(name, unregisteredVoters) that takes
in the name of a newly registered voter and an array of names of those who
have not yet registered to vote. Your function must return an array, with
the newly registered voter's name removed.

Examples
Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    
Output:
['Jake', 'Alanna', 'Stephanie']
*/

const registerToVote = (name, unregisteredVoters) => {
  const updatedVoters = unregisteredVoters.filter(voter => voter !== name);

  return updatedVoters;
}

const runTests = () => {
  let response = registerToVote('Jake', ['Jake', 'Alanna', 'Bradley', 'Stephanie']);
  let expected = ['Alanna', 'Bradley', 'Stephanie'];
  let ok = JSON.stringify(response) === JSON.stringify(expected);

  if (ok) {
    response = registerToVote('Bradley', ['Jake', 'Alanna', 'Bradley', 'Stephanie']);
    expected = ['Jake', 'Alanna', 'Stephanie'];
    ok = JSON.stringify(response) === JSON.stringify(expected);
  }

  if (ok) {
    response = registerToVote('Tom', ['Jake', 'Alanna', 'Bradley', 'Stephanie', 'Thomas', 'Paul', 'Tom']);
    expected = ['Jake', 'Alanna', 'Bradley', 'Stephanie', 'Thomas', 'Paul'];
    ok = JSON.stringify(response) === JSON.stringify(expected);
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();