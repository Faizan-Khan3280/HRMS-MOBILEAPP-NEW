import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PayslipPage = () => {
  const data = []; // Your data here

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Payslip</Text>
    </View>
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
  );

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.tableHeaderText}>Net Salary</Text>
      <Text style={styles.tableHeaderText}>Salary Month</Text>
      <Text style={styles.tableHeaderText}>Payroll Date</Text>
      <Text style={styles.tableHeaderText}>Status</Text>
      <Text style={styles.tableHeaderText}>Action</Text>
    </View>
  );

  const renderTableRow = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.netSalary}</Text>
      <Text style={styles.tableCell}>{item.salaryMonth}</Text>
      <Text style={styles.tableCell}>{item.payrollDate}</Text>
      <Text style={styles.tableCell}>{item.status}</Text>
      <View style={styles.tableCell}>
        <TouchableOpacity>
          <Icon name="remove-red-eye" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSearchBar()}
      {renderTableHeader()}
      {data.length === 0 ? (
        <Text style={styles.noDataText}>No data available in table</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderTableRow}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});

export default PayslipPage;
