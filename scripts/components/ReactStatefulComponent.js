/* eslint-disable */
const { Component, SCSSDefaultParser, PrettierParser } = require('genmite');

class ReactStatefulComponent extends Component {
  constructor(destinationFolder, componentFolder) {
    super(destinationFolder, componentFolder);
  }

  init() {
    const prettierParser = new PrettierParser();
    const jsType = {
      fileExtension: '.js',
      parser: prettierParser
    };

    const specJsType = {
      fileExtension: '.spec.js',
      parser: prettierParser
    };

    const scssType = {
      fileExtension: '.scss',
      parser: SCSSDefaultParser()
    };

    const componentFolder = this.getComponentFolder();

    this.add(jsType, this.defaultReactIndex(componentFolder), 'index');
    this.add(jsType, this.defaultReactJS(componentFolder));
    this.add(scssType, this.defaultReactSCSS(componentFolder));
    this.add(specJsType, this.defaultReactSpec(componentFolder));
  }

  defaultReactJS(component) {
    return `
      // @flow
      import React, { Component } from 'react'
      import styles from './${component}.scss'

      class ${component} extends Component {
        constructor(props) {
          super(props);
          this.state = {};
        }

        render() {
          return (
            <div>
              <h2>${component} Stateful Component generated from the cli</h2>
            </div>
          );
        }
      }

      export default ${component};
    `;
  }

  defaultReactSCSS(component) {
    return `
      .${component}{}
    `;
  }

  defaultReactIndex(component) {
    return `
      export { default as ${component} } from './${component}';
    `;
  }

  defaultReactSpec(component) {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      import renderer from 'react-test-renderer';

      import ${component} from './${component}';

      describe('${component} suite', () => {
        it('renders ${component} without any state injected', () => {
          const component = shallow(<${component} />);
          const tree = renderer
            .create(<${component} />)
            .toJSON();
          expect(component).toBeDefined();
          expect(tree).toMatchSnapshot();
        });
      });
    `;
  }
}

module.exports = ReactStatefulComponent;
