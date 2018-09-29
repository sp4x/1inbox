import React from 'react';
import Enzyme from 'enzyme';
import App from './App';
import Popup from './Popup';
import fs from 'fs';
import Adapter from 'enzyme-adapter-react-16';
import mock from 'mock-fs';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

  beforeEach(() => {
    mock({
      'data': {
        'some-file.txt': 'file content here'
      }
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('renders without crashing', () => {
    const app = Enzyme.mount(<App fs={fs} />);
    expect(app.find("div").length).toBeGreaterThan(0);
  });


  it('renders notes', () => {
    const app = Enzyme.mount(<App fs={fs} />);
    expect(app.find(".item").length).toBeGreaterThan(0);
  });

  it('displays the new note editor', () => {
    const app = Enzyme.shallow(<App fs={fs} />);
    app.find("#newnote").simulate("click");
    expect(app.find(Popup).dive().find(".editor-pane").length).toBeGreaterThan(0);
  });

  it('saves new notes', () => {
    const mockCallBack = jest.fn();
    fs.writeFile = mockCallBack;
    const app = Enzyme.shallow(<App fs={fs} />);
    app.find("#newnote").simulate("click");
    const popupWrapper = app.find(Popup).dive();
    popupWrapper.instance().updateContent("foo");
    popupWrapper.find("#done").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});
