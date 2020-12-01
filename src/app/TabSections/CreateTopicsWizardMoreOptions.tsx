import React, {useState} from 'react';
import {
  ActionGroup,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Checkbox,
  Divider,
  Flex,
  FlexItem,
  Form,
  Grid,
  GridItem,
  FormGroup,
  InputGroup,
  Popover,
  TextInput,
  PageSection,
  PageGroup,
  PageSectionVariants,
  Radio,
  Select,
  SelectOption,
  SelectVariant,
  Switch,
  Title,
  TextContent,
  Text,
  TextVariants,
  Wizard
} from '@patternfly/react-core';
import { Touchspin } from '../CustomComponents/Touchspin';
import './CreateTopicsWizard.css';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import { JumpLinks } from '../CustomComponents/JumpLinks';
import { JumpLinksItem } from '../CustomComponents/JumpLinksItem';

const CreateTopicsWizardMoreOptions: React.FunctionComponent = ({setIsCreateTopic}) => {

  const [value1, setValue1] = useState("");
  const [isOpen1, setIsOpen1] = useState(false);
  const [selected1, setSelected1] = useState(null);
  const [value2, setValue2] = useState("");
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected2, setSelected2] = useState(null);
  const [value3, setValue3] = useState("");
  const [isOpen3, setIsOpen3] = useState(false);
  const [selected3, setSelected3] = useState(null);
  const [value4, setValue4] = useState("");
  const [isOpen4, setIsOpen4] = useState(false);
  const [selected4, setSelected4] = useState(null);
  const [value5, setValue5] = useState("");
  const [isOpen5, setIsOpen5] = useState(false);
  const [selected5, setSelected5] = useState(null);
  const [value6, setValue6] = useState("");
  const [isOpen6, setIsOpen6] = useState(false);
  const [selected6, setSelected6] = useState(null);
  const [value7, setValue7] = useState("");
  const [isOpen7, setIsOpen7] = useState(false);
  const [selected7, setSelected7] = useState(null);
  const [value8, setValue8] = useState("");
  const [isOpen8, setIsOpen8] = useState(false);
  const [selected8, setSelected8] = useState(null);
  const [value9, setValue9] = useState("");
  const [isOpen9, setIsOpen9] = useState(false);
  const [selected9, setSelected9] = useState(null);
  const [value10, setValue10] = useState("");
  const [isOpen10, setIsOpen10] = useState(false);
  const [selected10, setSelected10] = useState(null);
  const [value11, setValue11] = useState("");
  const [isOpen11, setIsOpen11] = useState(false);
  const [selected11, setSelected11] = useState(null);
  const [value12, setValue12] = useState("");
  const [isOpen12, setIsOpen12] = useState(false);
  const [selected12, setSelected12] = useState(null);
  const [value13, setValue13] = useState("");
  const [isOpen13, setIsOpen13] = useState(false);
  const [selected13, setSelected13] = useState(null);
  const [value14, setValue14] = useState("");
  const [isOpen14, setIsOpen14] = useState(false);
  const [selected14, setSelected14] = useState(null);
  const [isOpen15, setIsOpen15] = useState(false);
  const [selected15, setSelected15] = useState(null);
  const [isOpen16, setIsOpen16] = useState(false);
  const [selected16, setSelected16] = useState(null);
  const [isOpen17, setIsOpen17] = useState(false);
  const [selected17, setSelected17] = useState(null);

  const onToggle1 = isOpen1 => {
    setIsOpen1(isOpen1);
  }

  const onSelect1 = (event, selection, isPlaceholder) => {
    setSelected1(selection);
    setIsOpen1(false);
  }

  const handleTextInputChange1 = value1 => {
    setValue1(value1);
  };


  const onToggle2 = isOpen2 => {
    setIsOpen2(isOpen2);
  }

  const onSelect2 = (event, selection, isPlaceholder) => {
    setSelected2(selection);
    setIsOpen2(false);
  }

  const onToggle3 = isOpen3 => {
    setIsOpen3(isOpen3);
  }

  const onSelect3 = (event, selection, isPlaceholder) => {
    setSelected3(selection);
    setIsOpen3(false);
  }

  const onToggle4 = isOpen4 => {
    setIsOpen4(isOpen4);
  }

  const onSelect4 = (event, selection, isPlaceholder) => {
    setSelected4(selection);
    setIsOpen4(false);
  }

  const onToggle5 = isOpen5 => {
    setIsOpen5(isOpen5);
  }

  const onSelect5 = (event, selection, isPlaceholder) => {
    setSelected5(selection);
    setIsOpen5(false);
  }

  const onToggle6 = isOpen6 => {
    setIsOpen6(isOpen6);
  }

  const onSelect6 = (event, selection, isPlaceholder) => {
    setSelected6(selection);
    setIsOpen6(false);
  }

  const onToggle7 = isOpen7 => {
    setIsOpen7(isOpen7);
  }

  const onSelect7 = (event, selection, isPlaceholder) => {
    setSelected7(selection);
    setIsOpen7(false);
  }

  const onToggle8 = isOpen8 => {
    setIsOpen8(isOpen8);
  }

  const onSelect8 = (event, selection, isPlaceholder) => {
    setSelected8(selection);
    setIsOpen8(false);
  }

  const onToggle9 = isOpen9 => {
    setIsOpen9(isOpen9);
  }

  const onSelect9 = (event, selection, isPlaceholder) => {
    setSelected9(selection);
    setIsOpen9(false);
  }

  const onToggle10 = isOpen10 => {
    setIsOpen10(isOpen10);
  }

  const onSelect10 = (event, selection, isPlaceholder) => {
    setSelected10(selection);
    setIsOpen10(false);
  }

  const onToggle11 = isOpen11 => {
    setIsOpen11(isOpen11);
  }

  const onSelect11 = (event, selection, isPlaceholder) => {
    setSelected11(selection);
    setIsOpen11(false);
  }

  const onToggle12 = isOpen12 => {
    setIsOpen12(isOpen12);
  }

  const onSelect12 = (event, selection, isPlaceholder) => {
    setSelected12(selection);
    setIsOpen12(false);
  }

  const onToggle13 = isOpen13 => {
    setIsOpen13(isOpen13);
  }

  const onSelect13 = (event, selection, isPlaceholder) => {
    setSelected13(selection);
    setIsOpen13(false);
  }

  const onToggle14 = isOpen14 => {
    setIsOpen14(isOpen14);
  }

  const onSelect14 = (event, selection, isPlaceholder) => {
    setSelected14(selection);
    setIsOpen14(false);
  }

  const onToggle15 = isOpen15 => {
    setIsOpen15(isOpen15);
  }

  const onSelect15 = (event, selection, isPlaceholder) => {
    setSelected15(selection);
    setIsOpen15(false);
  }

  const onToggle16 = isOpen16 => {
    setIsOpen16(isOpen16);
  }

  const onSelect16 = (event, selection, isPlaceholder) => {
    setSelected16(selection);
    setIsOpen16(false);
  }

  const onToggle17 = isOpen17 => {
    setIsOpen17(isOpen17);
  }

  const onSelect17 = (event, selection, isPlaceholder) => {
    setSelected17(selection);
    setIsOpen17(false);
  }

  return (
    <>
      <Grid hasGutter>
        <GridItem span={3}>
          <JumpLinks isVertical label="Jump to section" scrollableSelector="#scrollable-element">
            <JumpLinksItem
              isActive
              key={0}
              href="#coreConfiguration"
            >
                Core configuration
            </JumpLinksItem>
            <JumpLinksItem key={1} href="#messages">
              Messages
            </JumpLinksItem>
            <JumpLinksItem key={2} href="#log">
              Log
            </JumpLinksItem>
            <JumpLinksItem key={3} href="#replication">
              Replication
            </JumpLinksItem>
            <JumpLinksItem key={4} href="#cleanup">
              Cleanup
            </JumpLinksItem>
            <JumpLinksItem key={5} href="#index">
              Index
            </JumpLinksItem>
            <JumpLinksItem key={6} href="#flush">
              Flush
            </JumpLinksItem>
          </JumpLinks>

        </GridItem>
        <GridItem span={9}>
          <div className="topics-wizard-content">
          <PageGroup hasOverflowScroll  id="scrollable-element">
            <PageSection>

          <TextContent>
            <Text component={TextVariants.h2} tabIndex={-1} id="coreConfiguration">
              Core configuration
            </Text>
            <Text component={TextVariants.p}>
              We recommend you fill out and evaluate these details at a minimum before deploying your topic.
            </Text>
          </TextContent>
          <Form>
              <FormGroup
                label="Topic name"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <TextInput
                  isRequired
                  type="text"
                  id="input-1"
                  name="Topic name"
                  value={value1}
                  onChange={handleTextInputChange1}
                  label="Topic name"
                  placeholder="Test topic name"
                />
              </FormGroup>
              <FormGroup
                label="Partitions"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Touchspin value={1} maxWidth />
              </FormGroup>
              <FormGroup
                label="Replicas"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Touchspin value={3} maxWidth />
              </FormGroup>
              <FormGroup
                label="Minimum in-sync replicas"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Touchspin value={2} maxWidth />
              </FormGroup>
              <FormGroup
                label="Retention time"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={7} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle1}
                      onSelect={onSelect1}
                      selections={selected1}
                      isOpen={isOpen1}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds"/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" isPlaceholder/>
                      <SelectOption key={2} value="weeks" />
                      <SelectOption key={3} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
            </Form>

          <TextContent>
            <Text component={TextVariants.h2} tabIndex={-1} id="messages">
              Messages
            </Text>
            <Text component={TextVariants.p}>
              These details control how your messages will be handled in the Kafka instance.
            </Text>
          </TextContent>
          <Form>
            <FormGroup
              className="topics-wizard-content"
              label="Maximum message size"
              labelIcon={
                <Popover
                  headerContent={<div>Test</div>}
                  bodyContent={<div>Test</div>}
                >
                  <button
                    aria-label="More info for name field"
                    onClick={e => e.preventDefault()}
                    aria-describedby="simple-form-name"
                    className="pf-c-form__group-label-help"
                  >
                    <HelpIcon noVerticalAlign />
                  </button>
                </Popover>
              }
            >
              <Flex>
                <FlexItem grow={{ default: 'grow' }}>
                  <Touchspin value={100012} maxWidth />
                </FlexItem>
                <FlexItem>
                  <Select
                    variant={SelectVariant.single}
                    aria-label="Select Input"
                    onToggle={onToggle2}
                    onSelect={onSelect2}
                    selections={selected2}
                    isOpen={isOpen2}
                    // aria-labelledby={titleId}
                  >
                    <SelectOption key={0} value="bytes" isPlaceholder/>
                    <SelectOption key={1} value="kilobytes" />
                    <SelectOption key={2} value="megabytes" />
                    <SelectOption key={3} value="gigabytes" />
                    <SelectOption key={4} value="terabytes" />
                  </Select>
                </FlexItem>
              </Flex>
            </FormGroup>
              <FormGroup
                label="Message timestamp type"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Select
                    variant={SelectVariant.single}
                    aria-label="Select Input"
                    onToggle={onToggle3}
                    onSelect={onSelect3}
                    selections={selected3}
                    isOpen={isOpen3}
                    // aria-labelledby={titleId}
                  >
                    <SelectOption key={0} value="CreateTime" isPlaceholder/>
                    <SelectOption key={1} value="LogAppendTime" />
                  </Select>
              </FormGroup>
              <FormGroup
                className="topics-wizard-content"
                label="Maximum message timestamp difference"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={0} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle17}
                      onSelect={onSelect17}
                      selections={selected17}
                      isOpen={isOpen17}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
              <FormGroup
                label="Compression type"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Select
                    variant={SelectVariant.single}
                    aria-label="Select Input"
                    onToggle={onToggle15}
                    onSelect={onSelect15}
                    selections={selected15}
                    isOpen={isOpen15}
                    // aria-labelledby={titleId}
                  >
                    <SelectOption key={0} value="Producer" isPlaceholder/>
                    <SelectOption key={1} value="Gzip" />
                    <SelectOption key={2} value="Snappy" />
                    <SelectOption key={3} value="LZ4" />
                    <SelectOption key={4} value="Zstandard" />
                    <SelectOption key={5} value="Uncompressed" />
                  </Select>
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="log">
                Log
              </Text>
              <Text component={TextVariants.p}>
                Messages are continually appended to the partition’s log. This is when they are assigned their offset. These details define how your log is handled.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Cleanup policy"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Select
                  variant={SelectVariant.single}
                  aria-label="Select Input"
                  onToggle={onToggle4}
                  onSelect={onSelect4}
                  selections={selected4}
                  isOpen={isOpen4}
                  // aria-labelledby={titleId}
                >
                  <SelectOption key={0} value="compact" />
                  <SelectOption key={1} value="delete" isPlaceholder/>
                  <SelectOption key={2} value="compact, delete" />
                  <SelectOption key={3} value="delete, compact" />
                </Select>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Retention size"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={-1} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle5}
                      onSelect={onSelect5}
                      selections={selected5}
                      isOpen={isOpen5}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="bytes" isPlaceholder/>
                      <SelectOption key={1} value="kilobytes" />
                      <SelectOption key={2} value="megabytes" />
                      <SelectOption key={3} value="gigabytes" />
                      <SelectOption key={4} value="terabytes" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Log segment types"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={10737441824} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle6}
                      onSelect={onSelect6}
                      selections={selected6}
                      isOpen={isOpen6}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="bytes" isPlaceholder/>
                      <SelectOption key={1} value="kilobytes" />
                      <SelectOption key={2} value="megabytes" />
                      <SelectOption key={3} value="gigabytes" />
                      <SelectOption key={4} value="terabytes" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="replication">
                Replication
              </Text>
              <Text component={TextVariants.p}>
                These details control the behavior of your replicas. Each of these parameters has an impact on every replica created in this topic.
              </Text>
            </TextContent>

            <Form>
              <Checkbox label="Allow unclean leader election" aria-label="uncontrolled checkbox example" id="check-5" />
              <FormGroup
                className="topics-wizard-content"
                label="Follower replication throttled replicas"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <InputGroup>
                  <TextInput id="textInput6" type="text" aria-label="Text" />
                </InputGroup>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Leader replication throttled replicas"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <InputGroup>
                  <TextInput id="textInput6" type="text" aria-label="Text" />
                </InputGroup>
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="cleanup">
                Cleanup
              </Text>
              <Text component={TextVariants.p}>
                These details control the cleanup processing of the log.
              </Text>
            </TextContent>

            <Form>
            <FormGroup
                className="topics-wizard-content"
                label="Delete retention"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={0} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle16}
                      onSelect={onSelect16}
                      selections={selected16}
                      isOpen={isOpen16}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
              <FormGroup
                className="topics-wizard-content"
                label="Minimum cleanable dirty ratio"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Touchspin value={9007199254740991} maxWidth />
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Minimum compaction lag time"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={0} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle7}
                      onSelect={onSelect7}
                      selections={selected7}
                      isOpen={isOpen7}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment time"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={6048000} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle8}
                      onSelect={onSelect8}
                      selections={selected8}
                      isOpen={isOpen8}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment jitter time"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={0} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle9}
                      onSelect={onSelect9}
                      selections={selected9}
                      isOpen={isOpen9}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="File delete delay"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={6000} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle10}
                      onSelect={onSelect10}
                      selections={selected10}
                      isOpen={isOpen10}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
              <Checkbox label="Preallocation log segment files" aria-label="uncontrolled checkbox example" id="check-5" />
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="index">
                Index
              </Text>
              <Text component={TextVariants.p}>
                These details control the indexing of the log.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Index interval size"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={4096} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle11}
                      onSelect={onSelect11}
                      selections={selected11}
                      isOpen={isOpen11}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="bytes" isPlaceholder/>
                      <SelectOption key={1} value="kilobytes" />
                      <SelectOption key={2} value="megabytes" />
                      <SelectOption key={3} value="gigabytes" />
                      <SelectOption key={4} value="terabytes" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Segment interval size"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={10485760} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle12}
                      onSelect={onSelect12}
                      selections={selected12}
                      isOpen={isOpen12}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="bytes" isPlaceholder/>
                      <SelectOption key={1} value="kilobytes" />
                      <SelectOption key={2} value="megabytes" />
                      <SelectOption key={3} value="gigabytes" />
                      <SelectOption key={4} value="terabytes" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>
            </Form>

            <TextContent>
              <Text component={TextVariants.h2} tabIndex={-1} id="flush">
                Flush
              </Text>
              <Text component={TextVariants.p}>
                These details control the frequency of the flushing of the log.
              </Text>
            </TextContent>

            <Form>
              <FormGroup
                className="topics-wizard-content"
                label="Flush internal messages"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={98246548376534} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle13}
                      onSelect={onSelect13}
                      selections={selected13}
                      isOpen={isOpen13}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <FormGroup
                className="topics-wizard-content"
                label="Flush interval time"
                labelIcon={
                  <Popover
                    headerContent={<div>Test</div>}
                    bodyContent={<div>Test</div>}
                  >
                    <button
                      aria-label="More info for name field"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Flex>
                  <FlexItem grow={{ default: 'grow' }}>
                    <Touchspin value={924863845763856} maxWidth />
                  </FlexItem>
                  <FlexItem>
                    <Select
                      variant={SelectVariant.single}
                      aria-label="Select Input"
                      onToggle={onToggle14}
                      onSelect={onSelect14}
                      selections={selected14}
                      isOpen={isOpen14}
                      // aria-labelledby={titleId}
                    >
                      <SelectOption key={0} value="milliseconds" isPlaceholder/>
                      <SelectOption key={1} value="seconds" />
                      <SelectOption key={2} value="minutes" />
                      <SelectOption key={3} value="hours" />
                      <SelectOption key={4} value="days" />
                      <SelectOption key={5} value="weeks" />
                      <SelectOption key={6} value="months" />
                    </Select>
                  </FlexItem>
                </Flex>
              </FormGroup>

              <ActionGroup>
                <Button variant="primary" onClick={() => setIsCreateTopic(false)}>Create topic</Button>
                <Button variant="link" onClick={() => setIsCreateTopic(false)}>Cancel</Button>
              </ActionGroup>
            </Form>

              </PageSection>
            </PageGroup>
          </div>
        </GridItem>
      </Grid>
    </>
  );
}

export { CreateTopicsWizardMoreOptions };
