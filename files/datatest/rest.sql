INSERT INTO
  "user" (id)
VALUES
  ('b1aef857-4ca5-4da1-bb55-4eb9a05da185');

INSERT INTO
  rest (type, date_start, date_end, user_id)
VALUES
  (
    'Maladie',
    date_trunc ('day', NOW ()),
    date_trunc ('day', NOW () + INTERVAL '1 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  ),
  (
    'Maladie',
    date_trunc ('day', NOW () + INTERVAL '1 day'),
    date_trunc ('day', NOW () + INTERVAL '2 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  ),
  (
    'Maladie',
    date_trunc ('day', NOW () + INTERVAL '2 day'),
    date_trunc ('day', NOW () + INTERVAL '3 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  ),
  (
    'Congé',
    date_trunc ('day', NOW () + INTERVAL '4 day'),
    date_trunc ('day', NOW () + INTERVAL '5 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  ),
  (
    'Congé',
    date_trunc ('day', NOW () + INTERVAL '5 day'),
    date_trunc ('day', NOW () + INTERVAL '6 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  ),
  (
    'Formation',
    date_trunc ('day', NOW () + INTERVAL '7 day'),
    date_trunc ('day', NOW () + INTERVAL '8 day'),
    'b1aef857-4ca5-4da1-bb55-4eb9a05da185'
  );
