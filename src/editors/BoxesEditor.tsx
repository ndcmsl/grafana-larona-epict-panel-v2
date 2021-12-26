import { DataFrame, FieldType, getFieldDisplayName, StandardEditorProps } from '@grafana/data';
import { getTemplateSrv } from '@grafana/runtime';
import {
  Button,
  CollapsableSection,
  ColorPicker,
  Field,
  HorizontalGroup,
  Icon,
  IconButton,
  Input,
  Select,
  Switch,
  Tooltip,
  ValuePicker,
} from '@grafana/ui';
import React from 'react';
import { SymbolsLibrary } from 'symLibrary';
import { Box, SimpleOptions } from 'types';

export const BoxesEditor: React.FC<StandardEditorProps> = ({ item, value, onChange, context }) => {
  var ctx = context;
  var data = ctx.data;
  var options = ctx.options as SimpleOptions;
  if (options.boxes == null) {
    options.boxes = [];
  }
  const onAddBoxBtnClicked = ({ target }: any) => {
    if (options.boxes == null) {
      options.boxes = [];
    }
    options.boxes.push({
      angle: 0,
      color: '#fff',
      colorHigh: '#f00',
      colorLow: '#0f0',
      colorMedium: '#fa1',
      decimal: 0,
      fontSize: 12,
      hasOrb: false,
      hasBackground: false,
      backgroundColor: '#5794F2',
      orbHideText: false,
      orbLocation: 'Left',
      orbSize: 10,
      prefixSize: 10,
      serie: 'A-Serie',
      suffixSize: 10,
      text: 'N/A',
      suffix: '',
      prefix: '',
      thresholds: '',
      blinkHigh: true,
      blinkLow: false,
      isUsingThresholds: false,
      xpos: 0,
      ypos: 0,
      url: '',
      hasSymbol: false,
      symbol: '',
      symbolHideText: false,
      symbolWidth: 32,
      symbolHeight: 32,
      symbolDefHeight: 32,
      symbolDefWidth: 32,
      colorSymbol: false,
      customSymbol: '',
      selected: false,
    });
    onChange(options.boxes);
  };
  const onDeleteBox = ({ target }: any, index: number) => {
    delete options.boxes[index];
    options.boxes.splice(index, 1);
    onChange(options.boxes);
  };
  const onCloneBox = ({ target }: any, box: Box) => {
    options.boxes.push({ ...box });
    onChange(options.boxes);
  };
  const onBoxSerieUpdated = (value: any, box: Box) => {
    box.serie = value;
    onChange(options.boxes);
  };
  const onBoxPrefixChanged = ({ target }: any, box: Box) => {
    box.prefix = target.value;
    onChange(options.boxes);
  };
  const onBoxPrefixFontSizeChanged = ({ target }: any, box: Box) => {
    box.prefixSize = target.value;
    onChange(options.boxes);
  };
  const onBoxSuffixChanged = ({ target }: any, box: Box) => {
    box.suffix = target.value;
    onChange(options.boxes);
  };
  const onBoxSuffixFontSizeChanged = ({ target }: any, box: Box) => {
    box.suffixSize = target.value;
    onChange(options.boxes);
  };
  const onBoxXposChanged = ({ target }: any, box: Box) => {
    box.xpos = target.value;
    onChange(options.boxes);
  };
  const onBoxYposChanged = ({ target }: any, box: Box) => {
    box.ypos = target.value;
    onChange(options.boxes);
  };
  const onBoxAngleChanged = ({ target }: any, box: Box) => {
    box.angle = target.value;
    onChange(options.boxes);
  };
  const onBoxUrlChanged = ({ target }: any, box: Box) => {
    box.url = target.value;
    onChange(options.boxes);
  };
  const onBoxDecimalChanged = ({ target }: any, box: Box) => {
    box.decimal = target.value;
    onChange(options.boxes);
  };
  const onBoxFontsizeChanged = ({ target }: any, box: Box) => {
    box.fontSize = target.value;
    onChange(options.boxes);
  };
  const onBoxOrbChanged = ({ target }: any, box: Box) => {
    box.hasOrb = target.checked;
    onChange(options.boxes);
  };
  const onBoxOrbHideTextChanged = ({ target }: any, box: Box) => {
    box.orbHideText = target.checked;
    onChange(options.boxes);
  };
  const onBoxOrbLocationChanged = (location: any, box: Box) => {
    box.orbLocation = location.value;
    onChange(options.boxes);
  };
  const onBoxSymbolHideTextChanged = ({ target }: any, box: Box) => {
    box.symbolHideText = target.checked;
    onChange(options.boxes);
  };
  const onBoxColorSymbolChanged = ({ target }: any, box: Box) => {
    box.colorSymbol = target.checked;
    onChange(options.boxes);
  };
  const onBoxSymbolChanged = (symbol: any, box: Box) => {
    box.symbol = symbol.value;
    box.hasSymbol = symbol.value !== '';
    box.symbolDefWidth = symbol.width;
    box.symbolWidth = symbol.width * symbol.factor;
    box.symbolDefHeight = symbol.height;
    box.symbolHeight = symbol.height * symbol.factor;
    onChange(options.boxes);
  };
  const onBoxSymbolWidthChanged = ({ target }: any, box: Box) => {
    box.symbolWidth = target.value;
    onChange(options.boxes);
  };
  const onBoxSymbolHeightChanged = ({ target }: any, box: Box) => {
    box.symbolHeight = target.value;
    onChange(options.boxes);
  };
  const onBoxCustomSymbolChanged = ({ target }: any, box: Box) => {
    box.customSymbol = target.value;
    onChange(options.boxes);
  };
  const onBoxHasBackgroundChanged = ({ target }: any, box: Box) => {
    box.hasBackground = target.checked;
    onChange(options.boxes);
  };
  const onBoxBackgroundColorChanged = (color: string, box: Box) => {
    box.backgroundColor = color;
    onChange(options.boxes);
  };
  const onBoxUseThresholdsChanged = ({ target }: any, box: Box) => {
    box.isUsingThresholds = target.checked;
    onChange(options.boxes);
  };
  const onBoxThresholdsChanged = ({ target }: any, box: Box) => {
    box.thresholds = target.value;
    onChange(options.boxes);
  };
  const onBoxColorChanged = (color: string, box: Box) => {
    box.color = color;
    onChange(options.boxes);
  };
  const onBoxColorLowChanged = (color: string, box: Box) => {
    box.colorLow = color;
    onChange(options.boxes);
  };
  const onBoxColorMediumChanged = (color: string, box: Box) => {
    box.colorMedium = color;
    onChange(options.boxes);
  };
  const onBoxColorHighChanged = (color: string, box: Box) => {
    box.colorHigh = color;
    onChange(options.boxes);
  };
  const onBoxBlinkHighChanged = ({ target }: any, box: Box) => {
    box.blinkHigh = target.checked;
    onChange(options.boxes);
  };
  const onBoxBlinkLowChanged = ({ target }: any, box: Box) => {
    box.blinkLow = target.checked;
    onChange(options.boxes);
  };
  const onBoxOrbSizeChanged = ({ target }: any, box: Box) => {
    box.orbSize = target.value;
    onChange(options.boxes);
  };
  const orbLocations = [
    { label: 'Top', value: 'Top' },
    { label: 'Bottom', value: 'Bottom' },
    { label: 'Left', value: 'Left' },
    { label: 'Right', value: 'Right' },
  ];

  let availableSeries: Array<{ value: string; label: string }> = [];
  data.forEach((frm: DataFrame) => {
    let valuesFields = frm.fields.filter((f) => f.type === FieldType.number);
    valuesFields.forEach((oneValField) => {
      if (oneValField !== undefined) {
        const fieldDisplayName = getFieldDisplayName(oneValField, frm);
        let discoveredField =
          frm.name === undefined || frm.name === fieldDisplayName
            ? fieldDisplayName
            : `${frm.name} (${fieldDisplayName})`;
        availableSeries.push({ value: discoveredField, label: discoveredField });
      }
    });
  });

  let selectedBoxIndex = options.boxes.findIndex((b) => b.selected === true);

  const oneBoxEditor = (oneBox: Box, index: number) => {
    return (
      <div>
        <h5>Box #{index}</h5>
        <div className="section gf-form-group">
          <HorizontalGroup>
            <IconButton name="trash-alt" size="xl" surface="panel" onClick={(event) => onDeleteBox(event, index)} />
            <IconButton name="copy" size="xl" surface="panel" onClick={(event) => onCloneBox(event, oneBox)} />
          </HorizontalGroup>
        </div>
        <CollapsableSection label="Metric" isOpen={true}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <Field label="Name">
                <Input type="text" readOnly={true} value={oneBox.serie} width={16} />
              </Field>
              <ValuePicker
                label="Change Metric"
                icon="exchange-alt"
                options={availableSeries}
                onChange={(selectedItem) => onBoxSerieUpdated(selectedItem.value, oneBox)}
                variant="secondary"
                size="sm"
              />
              <Field label="Prefix">
                <Input type="text" onChange={(event) => onBoxPrefixChanged(event, oneBox)} value={oneBox.prefix} />
              </Field>
              <Field label="Suffix">
                <Input type="text" onChange={(event) => onBoxSuffixChanged(event, oneBox)} value={oneBox.suffix} />
              </Field>
            </HorizontalGroup>
            <HorizontalGroup>
              {oneBox.prefix ? (
                <>
                  <Field label="Prefix size">
                    <Input
                      type="number"
                      onChange={(event) => onBoxPrefixFontSizeChanged(event, oneBox)}
                      value={oneBox.prefixSize}
                    />
                  </Field>
                </>
              ) : null}
              {oneBox.suffix ? (
                <>
                  <Field label="Suffix size">
                    <Input
                      type="number"
                      onChange={(event) => onBoxSuffixFontSizeChanged(event, oneBox)}
                      value={oneBox.suffixSize}
                    />
                  </Field>
                </>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Position and Link" isOpen={true}>
          <div className="section gf-form-group">
            <Tooltip
              theme="info"
              content={
                <p>
                  You can easily find the coordinates if you <code>ctrl</code>+<code>left click</code>
                  anywhere on your image. You can also drag and drop the box on the image.
                </p>
              }
            >
              <Icon name="info-circle" />
            </Tooltip>
            <HorizontalGroup>
              <Field label="X">
                <Input type="number" onChange={(event) => onBoxXposChanged(event, oneBox)} value={oneBox.xpos} />
              </Field>
              <Field label="Y">
                <Input type="number" onChange={(event) => onBoxYposChanged(event, oneBox)} value={oneBox.ypos} />
              </Field>
            </HorizontalGroup>
            <HorizontalGroup>
              <Field label="Angle">
                <Input type="number" onChange={(event) => onBoxAngleChanged(event, oneBox)} value={oneBox.angle} />
              </Field>
              <Field label="Link">
                <Input type="text" onChange={(event) => onBoxUrlChanged(event, oneBox)} value={oneBox.url} />
              </Field>
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Symbol Library" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <div className="width-12">
                <Field label="Symbol">
                  <Select
                    options={SymbolsLibrary}
                    onChange={(v) => onBoxSymbolChanged(v, oneBox)}
                    value={oneBox.symbol}
                  />
                </Field>
              </div>
              {oneBox.symbol !== '' && oneBox.symbol !== 'custom' && oneBox.symbol !== 'text' ? (
                <img
                  srcSet={getTemplateSrv().replace(oneBox.symbol)}
                  width={oneBox.symbolDefWidth}
                  height={oneBox.symbolDefHeight}
                />
              ) : null}
            </HorizontalGroup>
            {oneBox.symbol === 'custom' ? (
              <>
                <HorizontalGroup>
                  <Field label="Custom symbol url">
                    <Input
                      type="text"
                      onChange={(event) => onBoxCustomSymbolChanged(event, oneBox)}
                      value={oneBox.customSymbol}
                    />
                  </Field>
                </HorizontalGroup>
              </>
            ) : null}
            {oneBox.symbol !== '' ? (
              <>
                <HorizontalGroup>
                  <Field label="Symbol width">
                    <Input
                      type="number"
                      onChange={(event) => onBoxSymbolWidthChanged(event, oneBox)}
                      value={oneBox.symbolWidth}
                    />
                  </Field>
                  <Field label="Symbol height">
                    <Input
                      type="number"
                      onChange={(event) => onBoxSymbolHeightChanged(event, oneBox)}
                      value={oneBox.symbolHeight}
                    />
                  </Field>
                </HorizontalGroup>
              </>
            ) : null}
            <HorizontalGroup>
              <div className="width-8">
                <Field label="Hide value">
                  <Switch
                    value={oneBox.symbolHideText}
                    checked={oneBox.symbolHideText}
                    onChange={(event) => onBoxSymbolHideTextChanged(event, oneBox)}
                  />
                </Field>
              </div>
              <div className="width-8">
                <Field label="Colorize symbol">
                  <Switch
                    value={oneBox.colorSymbol}
                    checked={oneBox.colorSymbol}
                    onChange={(event) => onBoxColorSymbolChanged(event, oneBox)}
                  />
                </Field>
              </div>
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Orb" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <div className="width-5">
                <Field label="Show Orb">
                  <Switch
                    value={oneBox.hasOrb}
                    checked={oneBox.hasOrb}
                    onChange={(event) => onBoxOrbChanged(event, oneBox)}
                  />
                </Field>
              </div>
              {oneBox.hasOrb ? (
                <>
                  <div className="width-6">
                    <Field label="Hide text">
                      <Switch
                        checked={oneBox.orbHideText}
                        onChange={(event) => onBoxOrbHideTextChanged(event, oneBox)}
                      />
                    </Field>
                  </div>
                  {!oneBox.orbHideText ? (
                    <>
                      <div className="width-12">
                        <Field label="Orb Location">
                          <Select
                            options={orbLocations}
                            onChange={(v) => onBoxOrbLocationChanged(v, oneBox)}
                            value={oneBox.orbLocation}
                          />
                        </Field>
                      </div>
                    </>
                  ) : null}
                  <div>
                    <Field label="Orb Size">
                      <Input
                        type="number"
                        value={oneBox.orbSize}
                        onChange={(event) => onBoxOrbSizeChanged(event, oneBox)}
                      />
                    </Field>
                  </div>
                </>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Font-size, decimal, thresholds, background" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <Field label="Decimal">
                <Input type="number" onChange={(event) => onBoxDecimalChanged(event, oneBox)} value={oneBox.decimal} />
              </Field>
              <Field label="Font-size">
                <Input
                  type="number"
                  onChange={(event) => onBoxFontsizeChanged(event, oneBox)}
                  value={oneBox.fontSize}
                />
              </Field>
            </HorizontalGroup>

            <HorizontalGroup>
              <Field label="Use Thresholds">
                <Switch
                  onChange={(event) => onBoxUseThresholdsChanged(event, oneBox)}
                  value={oneBox.isUsingThresholds}
                />
              </Field>
              {oneBox.isUsingThresholds ? (
                <>
                  <Tooltip
                    content={
                      <p>
                        Enter 2 comma-separated numbers. 20,60 will produce: <code>value &lt;= 20</code> -&gt; green{' '}
                        <br />
                        <code>value between 20 and 60</code> -&gt; yellow <br />
                        <code>value &gt;= 60</code> -&gt; red{' '}
                      </p>
                    }
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                  <Field label="Thresholds">
                    <Input
                      type="text"
                      onChange={(event) => onBoxThresholdsChanged(event, oneBox)}
                      value={oneBox.thresholds}
                    />
                  </Field>
                  <HorizontalGroup>
                    <ColorPicker color={oneBox.colorLow} onChange={(color) => onBoxColorLowChanged(color, oneBox)} />

                    <ColorPicker
                      color={oneBox.colorMedium}
                      onChange={(color) => onBoxColorMediumChanged(color, oneBox)}
                    />

                    <ColorPicker color={oneBox.colorHigh} onChange={(color) => onBoxColorHighChanged(color, oneBox)} />
                  </HorizontalGroup>
                </>
              ) : (
                <Field label="Color">
                  <ColorPicker color={oneBox.color} onChange={(color) => onBoxColorChanged(color, oneBox)} />
                </Field>
              )}
            </HorizontalGroup>
            {oneBox.isUsingThresholds ? (
              <HorizontalGroup>
                <Field label="Blink if low">
                  <Switch onChange={(event) => onBoxBlinkLowChanged(event, oneBox)} value={oneBox.blinkLow} />
                </Field>
                <Field label="Blink if high">
                  <Switch onChange={(event) => onBoxBlinkHighChanged(event, oneBox)} value={oneBox.blinkHigh} />
                </Field>
              </HorizontalGroup>
            ) : null}
            <HorizontalGroup>
              <Field label="Show the background">
                <Switch onChange={(event) => onBoxHasBackgroundChanged(event, oneBox)} value={oneBox.hasBackground} />
              </Field>
              {oneBox.hasBackground ? (
                <HorizontalGroup>
                  <Field label="Color">
                    <ColorPicker
                      color={oneBox.backgroundColor}
                      onChange={(color) => onBoxBackgroundColorChanged(color, oneBox)}
                    />
                  </Field>
                </HorizontalGroup>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <hr />
      </div>
    );
  };

  return (
    <div className="section gf-form-group">
      {selectedBoxIndex !== -1 ? (
        <>
          <h4 className="section-heading">Selected Box:</h4>
          {oneBoxEditor(options.boxes[selectedBoxIndex], selectedBoxIndex)}
          <hr />
          <h4 className="section-heading">All defined boxes:</h4>
        </>
      ) : null}
      {options.boxes.map((oneBox, index) => oneBoxEditor(oneBox, index))}
      <Button variant="primary" size="md" icon="plus" onClick={onAddBoxBtnClicked}>
        Add a box
      </Button>
    </div>
  );
};
