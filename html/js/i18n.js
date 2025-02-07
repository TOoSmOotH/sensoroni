// Copyright 2019 Jason Ertel (jertel). All rights reserved.
//
// This program is distributed under the terms of version 2 of the
// GNU General Public License.  See LICENSE for further details.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

var translations = {};

translations['en-US'] = {
  addJob: 'Add Job',
  ascii: 'ASCII',
  asciiHelp: 'View packet data in ASCII',
  attempt: 'Attempt',
  brand: 'Sensoroni',
  collapse: 'Collapse',
  collapseHelp: 'Collapse all packet data',
  completed: 'Completed',
  dateDataEpoch: 'Data Epoch',
  dateCompleted: 'Date Completed',
  dateOnline: 'Date Online',
  dateQueued: 'Date Queued',
  dateTimeFormat: 'lll',
  dateUnknown: '',
  dateUpdated: 'Date Updated',
  description: 'Description',
  download: 'Download',
  error: 'The operation could be completed',
  expand: 'Expand',
  expandHelp: 'Expand all packet data',
  incomplete: 'Incomplete',
  filterPackets: 'Filter Results',
  flags: 'Flags',
  hex: 'HEX',
  hexHelp: 'View packet data in both hexadecimal and ASCII',
  id: 'ID',
  job: 'Job',
  jobIncomplete: 'The job was unable to complete and will retry within a few minutes. Details are available below.',
  jobInProgress: 'This job is awaiting completion.',
  jobNotFound: 'The selected job no longer exists',
  jobs: 'Jobs',
  length: 'Length',
  license: 'License',
  loading: 'Loading, please wait...',
  loadMore: 'Load More',
  noData: 'No information is currently available.',
  noSearchResults: 'No search results were found.',
  number: 'Num',
  owner: 'Owner',
  packets: 'Captured Packets',
  pending: 'Pending',
  reason: 'Reason',
  results: 'Results',
  sensor: 'Sensor',
  sensorId: 'Sensor ID',
  sensorIdRequired: 'The Sensor ID must be entered before adding a new job.',
  sensorIdHelp: 'The sensor ID must match an actual sensor ID in order for this job to be processed.',
  sensors: 'Sensors',
  showAll: 'Show all packet bytes',
  showPacketsHelp: 'Show the raw packet metadata, including type, source, destination, length, etc.',
  showStreamHelp: 'Show the application-level data stream',
  srcIp: 'Source IP',
  srcIpHelp: 'The source IP address to include in this job filter',
  srcPort: 'Source Port',
  srcPortHelp: 'The source TCP port to include in this job filter',
  dstIp: 'Destination IP',
  dstIpHelp: 'The destination IP address to include in this job filter',
  dstPort: 'Destination Port',
  dstPortHelp: 'The destination TCP port to include in this job filter',
  beginTime: 'Filter Begin',
  beginTimeHelp: 'The beginning date and time to include in this job filter (YYYY-MM-DD HH:mm:ss.SSS Z)',
  endTime: 'Filter End',
  endTimeHelp: 'The ending date and time to include in this job filter (YYYY-MM-DD HH:mm:ss.SSS Z)',
  status: 'Status',
  timestamp: 'Timestamp',
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS Z',
  type: 'Type',
  uptime: 'Uptime',
  version: 'Version',
  viewJob: 'View Job',
}

function getLocalizedTranslations(lang) {
  var i18n = translations[lang];
  if (i18n == undefined) i18n = translations['en-US'];
  return i18n;
};

