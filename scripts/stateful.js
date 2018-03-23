const { ComponentCrafter, PromptService } = require('genmite');
const ReactStatefulComponent = require('./components/ReactStatefulComponent');

main();

function main() {
  const folders = {
    destination: '',
    component: ''
  };

  PromptService.ask('Destination folder: ')
    .then(answer => {
      folders.destination = answer.trim();
      return PromptService.ask('Component folder: ');
    })
    .then(answer => {
      folders.component = answer.trim();
      createComponent(folders);
    });
}

function createComponent(folders) {
  const { destination, component } = folders;
  const service = new ComponentCrafter();

  const comp = new ReactStatefulComponent(destination, component);

  service.createCustom(comp);
}
