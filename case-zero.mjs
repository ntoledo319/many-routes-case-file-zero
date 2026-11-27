// CASE FILE ZERO — free mini-case. Original: no people, clues or culprit shared with TMT-01.
// Single source for the HTML and for the logic check (check.mjs).
export const ZERO = {
  title: 'Case File Zero: The Elm Street Cash Drawer',
  setup: 'Saturday, 7:00 p.m. Nell Ambrose, the Elm Street ticket clerk, opens the office safe drawer to bank the day’s fares and finds $40 missing. The drawer was locked at 5:31 p.m. with $112.40 inside. Only two people carry a drawer key. Read the six documents, find the one statement that cannot be true, and name who opened the drawer.',
  cast: [
    ['Nell Ambrose', 'Ticket clerk, Elm Street office'],
    ['Harriet Cole', 'Fare inspector'],
    ['Pete Varga', 'Conductor, Car 4'],
    ['Lou Danby', 'Office cleaner'],
    ['Sam Ortiz', 'Newsboy, Elm Street corner'],
  ],
  docs: [
    {no: 'Z1', name: 'Office closing sheet', text: 'Till counted 5:30 p.m.: $112.40. Placed in safe drawer and locked, 5:31. Drawer keys issued to: N. Ambrose (clerk), H. Cole (inspector). No other copies. — signed N.A.'},
    {no: 'Z2', name: 'Safe drawer log', text: '5:31 p.m. — opened/closed, deposit — N.A.\n5:52 p.m. — opened/closed, “count check” — H.C.\n7:00 p.m. — opened, $72.40 found, $40 short — N.A.'},
    {no: 'Z3', name: 'Statement of Inspector Cole', text: '“I left Elm Street at a quarter past five and went straight to the depot. I was there all evening. I never touched that drawer after lunch. Anybody can scribble ‘H.C.’ in a log book.”'},
    {no: 'Z4', name: 'Depot telephone register', text: '5:50 p.m. — incoming, from ELM ST OFFICE line — Insp. Cole: “Running late, will be in by half six.”\n6:34 p.m. — Insp. Cole signs in at depot desk.'},
    {no: 'Z5', name: 'Car 4 trip sheet (Conductor Varga)', text: 'Outbound 5:40 p.m. from Elm St: 1 fare boarded — N. Ambrose (staff pass), alighted Larch Ave 6:05. Car 4 returned to Elm St 6:50. — P.V.'},
    {no: 'Z6', name: 'Two more statements', text: 'Lou Danby, cleaner: “I swept the office at quarter past six. Drawer was shut and locked. I’ve no key — never had one.”\nSam Ortiz, newsboy: “Miss Ambrose waved at me and got on Car 4 about twenty to six. A while later a lady in an inspector’s cap came out of the office in a hurry. Five to six, maybe.”'},
  ],
  // Machine-checkable facts for check.mjs
  logic: {
    keyHolders: ['Nell Ambrose', 'Harriet Cole'],
    theftWindow: ['17:31', '19:00'],
    openedAt: '17:52',
    whereAt: { // person -> [time, place, source]
      'Nell Ambrose': [['17:40', '18:05', 'Car 4', 'Z5'], ['17:40', '17:40', 'Car 4', 'Z6']],
      'Harriet Cole': [['17:50', '17:50', 'Elm St office', 'Z4'], ['17:55', '17:55', 'leaving Elm St office', 'Z6']],
      'Pete Varga': [['17:40', '18:50', 'Car 4', 'Z5']],
    },
    claims: {'Harriet Cole': ['17:15', '18:34', 'depot', 'Z3']},
  },
  solution: {
    culprit: 'Harriet Cole',
    chain: [
      'Only Ambrose and Cole hold drawer keys (Z1), and the drawer was opened at 5:52 p.m. (Z2). Danby has no key (Z6); Varga and Ortiz are not key-holders.',
      'Ambrose cannot have opened it at 5:52: she was on Car 4 from 5:40 to 6:05 (Z5), and Ortiz independently saw her board (Z6).',
      'Cole says she was at the depot from 5:15 (Z3). But the depot register logs her calling from the Elm Street office line at 5:50 (Z4), two minutes before the drawer was opened. Her statement is the one that cannot be true.',
      'Ortiz saw a woman in an inspector’s cap hurrying out at about 5:55 (Z6), and Cole did not sign in at the depot until 6:34 (Z4).',
    ],
    answer: 'Inspector Harriet Cole opened the drawer at 5:52 p.m. with her own key and took $40. The “forged initials” story fails because her own phone call places her in the office at 5:50.',
  },
};
