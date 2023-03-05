import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

const Settings = () => {
  return (
    <div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <Input type='text' placeholder='URL of profile picture' />
                </fieldset>
                <fieldset className='form-group'>
                  <Input type='text' size='lg' placeholder='Your Name' />
                </fieldset>
                <fieldset className='form-group'>
                  <Textarea
                    size='lg'
                    rows={8}
                    placeholder='Short bio about you'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Input type='text' size='lg' placeholder='Email' />
                </fieldset>
                <fieldset className='form-group'>
                  <Input type='password' size='lg' placeholder='Password' />
                </fieldset>
                <Button>Update Settings</Button>
              </fieldset>
            </form>
            <hr />
            <button className='btn btn-outline-danger'>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
