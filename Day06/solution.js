/*
Phew, with our help the city staff were able to select the voting stations on time and the election
went off without a hitch! Now that the votes have been cast, the Election staff needs to verify the
votes by matching each voter's signature to their voter ID.

Instructions
Complete the function voterTurnout(), that will take in two arrays. The first array is a list of
voter ids, and the second array is a list of voter signatures, which correspond to the voter ids.
Our task here is to first check that each array have the same number of items and then confirm that
each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our
function should return false. If they contain the same number of elements, then we should proceed
to check if the two arrays are identical, meaning they contain the same names in the same order.

If they are, our function should return "All clear, we can count the votes!", if they are not
it should return "FRAUD!".

Examples
Input:
  const voter_signatures = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Fake McFakerson',
    'Jane Janesford'
  ]

  const voter_ids = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
  ]
    
Output:
FRAUD!

Input:
  const voter_signatures = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
  ]

  const voter_ids = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford'
  ]
    
Output:
'All clear, we can count the votes!
*/

const voterTurnout = (voter_signatures, voter_ids) => {
  const signaturesCount = voter_signatures.length;
  const idCount = voter_ids.length;

  const responses = {
    lengthMismatchedResponse: false,
    fraudResponse: 'FRAUD!',
    passingResponse: 'All clear, we can count the votes!',
  };

  if (signaturesCount !== idCount) return responses.lengthMismatchedResponse;

  let signaturesOK = true;
  let namesOrderMatch = true;

  voter_signatures.forEach((signature, signatureIndex) => {
    if (!signaturesOK) return false;
    if (!namesOrderMatch) return false;

    const index = voter_ids.findIndex(id => id === signature);
    signaturesOK = index > -1;

    namesOrderMatch = voter_ids[signatureIndex] === signature;
  });

  if (!signaturesOK || !namesOrderMatch) return responses.fraudResponse;

  return responses.passingResponse;
}


const runTests = () => {
  const responses = {
    lengthMismatchedResponse: false,
    fraudResponse: 'FRAUD!',
    passingResponse: 'All clear, we can count the votes!',
  };

  let sig = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Fake McFakerson',
    'Jane Janesford',
  ];
  let ids = [
    'Bill Billiamson',
    'Kate Etak',
    'Brandon Brandonus',
    'Simon Simonson',
    'Jane Janesford',
  ];

  const response = voterTurnout(sig, ids);
  let ok = response === responses.fraudResponse;

  if (ok) {
    let sig = [
      'Bill Billiamson',
      'Kate Etak',
      'Brandon Brandonus',
      'Fake McFakerson',
      'Jane Janesford',
    ];
    let ids = [
      'Bill Billiamson',
      'Kate Etak',
      'Brandon Brandonus',
      'Jane Janesford',
    ];
  
    const response = voterTurnout(sig, ids);
    ok = response === responses.lengthMismatchedResponse;
  }

  if (ok) {
    let sig = [
      'Bill Billiamson',
      'Kate Etak',
      'Brandon Brandonus',
      'Simon Simonson',
      'Jane Janesford',
    ];
    let ids = [
      'Bill Billiamson',
      'Kate Etak',
      'Brandon Brandonus',
      'Simon Simonson',
      'Jane Janesford',
    ];
  
    const response = voterTurnout(sig, ids);
    ok = response === responses.passingResponse;
  }

  if (ok) {
    let sig = [
      'Bill Billiamson',
      'Kate Etak',
      'Brandon Brandonus',
      'Simon Simonson',
      'Jane Janesford',
    ];
    let ids = [
      'Kate Etak',
      'Brandon Brandonus',
      'Simon Simonson',
      'Jane Janesford',
      'Bill Billiamson',
    ];
  
    const response = voterTurnout(sig, ids);
    ok = response === responses.fraudResponse;
  }

  if (!ok) {
    throw new Error('test failed!');
  }
};

runTests();
