import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import withAuth from '@/components/common/withAuth';

const EditorCreate = () => {
  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <Input type='text' size='lg' placeholder='Article Title' />
                </fieldset>
                <fieldset className='form-group'>
                  <Input type='text' placeholder="What's this article about?" />
                </fieldset>
                <fieldset className='form-group'>
                  <Textarea
                    rows={8}
                    placeholder='Write your article (in markdown)'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Input type='text' placeholder='Enter tags' />
                  <div className='tag-list'></div>
                </fieldset>
                <Button type='button'>Publish Article</Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(EditorCreate);
