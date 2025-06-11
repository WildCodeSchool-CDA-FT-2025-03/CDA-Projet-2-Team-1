import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

function NoteSecretary() {
  return (
    <>
      <h3 className="font-semibold text-xl mb-3 border-b border-turquoise-600 pb-2">
        Note du secrétariat
      </h3>
      <Textarea />
      <Button>Enregistrer</Button>
    </>
  );
}

export default NoteSecretary;
