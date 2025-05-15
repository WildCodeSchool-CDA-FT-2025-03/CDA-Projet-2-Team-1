INSERT INTO
  rest (date, duration, user_id)
VALUES
  (
    date_trunc ('day', NOW ()),
    INTERVAL '24 hours',
    '1'
  ),
  (
    date_trunc ('day', NOW () + INTERVAL '1 day'),
    INTERVAL '24 hours',
    '1'
  ),
  (
    date_trunc ('day', NOW () + INTERVAL '2 day'),
    INTERVAL '24 hours',
    '1'
  ),
  (
    date_trunc ('day', NOW () + INTERVAL '7 day'),
    INTERVAL '3 day',
    '1'
  );
    