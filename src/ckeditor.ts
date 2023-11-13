import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Placeholder } from '@studyly/ckeditor5-placeholder';

class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Link,
  List,
  Paragraph,
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'undo',
      'redo',
    ],
  },
  language: 'en',
};

class InlineEditor extends InlineEditorBase {}

InlineEditor.builtinPlugins = [
  Essentials,
  // Autoformat,
  // Bold,
  // Italic,
  // BlockQuote,
  // Heading,
  // Link,
  // List,
  Paragraph,
  Placeholder,
];

InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      // 'heading',
      // '|',
      // 'bold',
      // 'italic',
      // 'link',
      // 'bulletedList',
      // 'numberedList',
      // 'blockQuote',
      'undo',
      'redo',
      '|',
      'placeholderButton',
    ],
  },
  language: 'en',
};

export default { ClassicEditor, InlineEditor };
