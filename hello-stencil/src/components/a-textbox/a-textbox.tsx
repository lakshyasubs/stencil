import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'a-textbox',
  styleUrl: 'a-textbox.css',
  shadow: true
})
export class ATextbox {

  @Prop() fieldId: string;

  render() {
    var element = document.getElementsByTagName('a-textbox');
    return <div class="input-field-container"><input id={this.fieldId} class="input-field" ></input>
    <div innerHTML={element[0].innerHTML}></div>
    </div>;
  }
}
