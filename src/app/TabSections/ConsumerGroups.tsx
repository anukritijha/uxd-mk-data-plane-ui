import * as React from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  Divider,
  Label,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  InputGroup,
  TextInput,
  PageSection,
  Title
} from '@patternfly/react-core';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant
} from '@patternfly/react-table';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';

const ConsumerGroups: React.FunctionComponent = ({setConsumerGroupID, setIsExpanded2}) => {

  const consumerGroupData = [
    {
      "id": "Custom_0",
      "members": 2,
      "partitions": 2,
      "state": 'Stable'
    },
    {
      "id": "Custom_1",
      "members": 1,
      "partitions": 1,
      "state": 'Empty'
    },
    {
      "id": "Custom_2",
      "members": 0,
      "partitions": 0,
      "state": 'Stable'
    },
    {
      "id": "Custom_3",
      "members": 2,
      "partitions": 2,
      "state": 'Stable'
    },
    {
      "id": "Custom_4",
      "members": 1,
      "partitions": 0,
      "state": 'Stable'
    },
    {
      "id": "Custom_5",
      "members": 0,
      "partitions": 0,
      "state": 'Empty'
    },
    {
      "id": "Custom_6",
      "members": 2,
      "partitions": 1,
      "state": 'Stable'
    },
    {
      "id": "Custom_7",
      "members": 2,
      "partitions": 2,
      "state": 'Stable'
    },
    {
      "id": "Custom_8",
      "members": 2,
      "partitions": 1,
      "state": 'Stable'
    },
    {
      "id": "Custom_9",
      "members": 1,
      "partitions": 2,
      "state": 'Stable'
    },
    {
      "id": "Custom_10",
      "members": 2,
      "partitions": 1,
      "state": 'Stable'
    },

  ]

  const columns = (
    [
      'Consumer group ID',
      'Active members',
      'Unconsumed partitions',
      'State'
    ]
  )

  const onClickConsumerGroup = (id) => {
    setConsumerGroupID(id);
    setIsExpanded2(true);
  }

  const rows = consumerGroupData.map(consumergroup => (
      [
        { title: <Button variant="link" isInline onClick={() => onClickConsumerGroup(consumergroup.id)}>{consumergroup.id}</Button>},
        consumergroup.members,
        consumergroup.partitions,
        { title: <Label color={consumergroup.state === "Stable" ? "green" : "red"} icon={consumergroup.state === "Stable" ? <CheckCircleIcon/> : <ExclamationCircleIcon/>}>{consumergroup.state}</Label>}

      ]
    )
  );

  return (
    <>
      <Card>
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <InputGroup className="topics-search-inputgroup">
                <TextInput name="textInput1" id="textInput1" type="search" aria-label="search input example" placeholder="Search" />
                <Button variant={ButtonVariant.control} aria-label="search button for search input">
                  <SearchIcon />
                </Button>
              </InputGroup>
            </ToolbarItem>
            <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
              <div className="topics-per-page">
               <b>Consumer groups per page:</b> 10
              </div>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <Divider/>
        <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
          <TableHeader />
          <TableBody />
        </Table>
      </Card>
    </>
  )
}

export { ConsumerGroups };
