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
                    headerContent={<div>Topic name</div>}
                    bodyContent={<div>
                      This is the unique identifier for this topic within this cluster. You'll need this to set up your producers and consumers, so make it something memorable.
                      </div>}
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
                    headerContent={<div>Partitions</div>}
                    bodyContent={<div>A partition is an ordered list of messages. One or more partitions make up a topic.</div>}
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
                    headerContent={<div>Replicas</div>}
                    bodyContent={<div>
                      In order to improve availability, each topic can be replicated onto multiple brokers. If a following replica is keeping up with the partition leader, its replica is in-sync. Any follower with an in-sync replica can become the leader without losing any messages.
                      </div>}
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
                    headerContent={<div>Minimum in-sync replicas</div>}
                    bodyContent={<div>Determines the reliability guarantee achievable for this topic. The minimum number of replicas that must acknowledge a write to satisfy a producer that requests acknowledgements from all replicas. (min.insync.replicas)</div>}
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
                    headerContent={<div>Retention time</div>}
                    bodyContent={<div>
                      The length of time that messages are retained before they are deleted. If your messages are not read by a consumer within this time, they will be missed. (retention.ms)
                      </div>}
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
                  headerContent={<div>Maximum message size</div>}
                  bodyContent={<div>The maximum record batch size. (max.message.bytes)
                    </div>}
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
                    headerContent={<div>Message timestamp type</div>}
                    bodyContent={<div>Determines if the timestamp is made when the message is created or when the message is appended to the log. (message.timestamp.type)
                      </div>}
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
                    headerContent={<div>Maximum message timestamp difference</div>}
                    bodyContent={<div>The maximum difference allowed between the timestamp of the message leaving the producer and arriving at the broker. (message.timestamp.difference.max.ms)
                      </div>}
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
                    headerContent={<div>Compression type</div>}
                    bodyContent={<div>
                      Determines the final compression for the topic, or whether to retain the compression set by the producer. (compression.type)
                      </div>}
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
                    headerContent={<div>Cleanup policy</div>}
                    bodyContent={<div>
                      Determines what happens to log segments beyond the retention window. (cleanup.policy)
                      </div>}
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
                    headerContent={<div>Retention size</div>}
                    bodyContent={<div>The maximum total size of a partition's log segments before old log segments are deleted to free up space. (retention.bytes)</div>}
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
                label="Log segment size"
                labelIcon={
                  <Popover
                    headerContent={<div>Log segment size</div>}
                    bodyContent={<div>The size of the log segment files. Log processing such as deletion and compaction operates on log segments, so a larger setting gives fewer files but less frequent log processing. (segment.bytes)
                      </div>}
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
              
              <FormGroup
                className="topics-wizard-content"
                label="Unclean leader election"
                labelIcon={
                  <Popover
                    headerContent={<div>Unclean leader election</div>}
                    bodyContent={<div>
                      Allows a replica which is not in-sync to become the leader of the partition. This is only done as a last resort and can lead to data loss. (unclean.leader.election.enable)
                      </div>}
                  >
                    <button
                      aria-label="Unclean leader election"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Checkbox label="Allow unclean leader election" aria-label="uncontrolled checkbox example" id="check-5" />
              </FormGroup>
              <FormGroup
                className="topics-wizard-content"
                label="Follower replication throttled replicas"
                labelIcon={
                  <Popover
                    headerContent={<div>Follower replication throttled replicas</div>}
                    bodyContent={<div>
                      A list of the replicas for which replication should be throttled on the follower side. Can be used to limit the network bandwidth consumed by replication. (follower.replication.throttled.replicas)
                      </div>}
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
                    headerContent={<div>Leader replication throttled replicas</div>}
                    bodyContent={<div>A list of the replicas for which replication should be throttled on the leader side. Can be used to limit the network bandwidth consumed by replication. (leader.replication.throttled.replicas)
                      </div>}
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
                    headerContent={<div>Delete retention</div>}
                    bodyContent={<div>
                      Determines the time for which tombstone markers are retained if the topic is compacted. (delete.retention.ms)
                      </div>}
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
                    headerContent={<div>Minimum cleanable dirty ratio</div>}
                    bodyContent={<div>Determines the frequency of compacting the log in terms of the proportion of duplicated keys allowed. Applies only to compacted topics. (min.cleanable.dirty.ratio)
                      </div>}
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
                    headerContent={<div>Minimum compaction lag time</div>}
                    bodyContent={<div>The minimum time a message will remain uncompacted. Applies only to compacted topics. (min.compaction.lag.ms)
                      </div>}
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
                    headerContent={<div>Segment time</div>}
                    bodyContent={<div>The period of time after which the current log segment is rolled even if it is not full. This permits log processing such as deletion and compaction to proceed for quiet topics. (segment.ms)
                      </div>}
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
                    headerContent={<div>Segment jitter time</div>}
                    bodyContent={<div>Controls a random delay to add to log segment rolling with the aim of preventing bursts of log segment rolling activity. (segment.jitter.ms)
                      </div>}
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
                    headerContent={<div>File delete delay</div>}
                    bodyContent={<div>
                      The delay before deleting a file from the filesystem. (file.delete.delay.ms)
                      </div>}
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
              <FormGroup
                className="topics-wizard-content"
                label="Preallocate log segment files"
                labelIcon={
                  <Popover
                    headerContent={<div>Preallocate log segment files</div>}
                    bodyContent={<div>
                        Determines whether to preallocate log segment files. (preallocate)
                      </div>}
                  >
                    <button
                      aria-label="Unclean leader election"
                      onClick={e => e.preventDefault()}
                      aria-describedby="simple-form-name"
                      className="pf-c-form__group-label-help"
                    >
                      <HelpIcon noVerticalAlign />
                    </button>
                  </Popover>
                }
              >
                <Checkbox label="Alow preallocation of log segment files" aria-label="uncontrolled checkbox example" id="check-6" />
              </FormGroup>
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
                    headerContent={<div>Index interval size</div>}
                    bodyContent={<div>
                      Determines the granularity of the offset index. (index.interval.bytes)
                      </div>}
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
                label="Segment index size"
                labelIcon={
                  <Popover
                    headerContent={<div>Segment index size</div>}
                    bodyContent={<div>The size of the index that maps offsets to file positions. (segment.index.bytes)</div>}
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
                label="Flush interval messages"
                labelIcon={
                  <Popover
                    headerContent={<div>Flush interval messages</div>}
                    bodyContent={<div>
                      Determines the number of messages between flushing data to the log. Replication is a better way to ensure data is not lost when failures occur. (flush.messages)
                      </div>}
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
                    headerContent={<div>Flush interval time</div>}
                    bodyContent={<div>
                      Determines the interval in time between flushing data to the log. Replication is a better way to ensure data is not lost when failures occur. (flush.ms)
                      </div>}
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
