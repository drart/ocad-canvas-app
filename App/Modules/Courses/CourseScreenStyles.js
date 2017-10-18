import { Containers, Metrics, Colors, Fonts } from '../../Common/index'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  courseBox: {
    borderColor: Colors.iosLight,
    borderWidth: 0.5,
    minHeight: 200,
    margin: Metrics.baseMargin,
    padding: Metrics.doubleBaseMargin
  },
  'courseBox:first-child': {
    marginTop: 0
  },
  label: {
    color: Colors.lightGrey,
    alignSelf: 'center'
  },
  courseCode: {
    fontSize: Fonts.size.input,
    color: Colors.lightGrey,
    textAlign: 'left',
    fontWeight: '400',
    padding: 0,
    marginLeft: -2
  },
  courseName: {
    fontSize: Fonts.size.input,
    color: Colors.ios,
    textAlign: 'left',
    fontWeight: '400',
    padding: 0,
    margin: 0
  },
  summaryContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#000000'
  },
  summaryBox: {
    margin: Metrics.baseMargin,
    borderWidth: 0.5,
    height: 160,
    padding: 20,
    overflow: 'hidden',
    borderRadius: 15,
    borderColor: Colors.iosLight,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  summaryBoxDate: {
    paddingBottom: 5,
    color: Colors.lightGrey
  },
  summaryBoxTitle: {
    fontWeight: '500',
    fontSize: Fonts.size.regular
  },
  summaryBoxCategory: {
  },
  summaryBoxMessage: {
    paddingTop: 5
  },
  assignmentContainer: {
    marginLeft: 10
  },
  assignmentName: {
    fontWeight: '400'
  },
  assignmentDueDate: {
    color: Colors.lightGrey
  },
  assignmentContent: {
    padding: 10
  },
  rubricContainer: {
    marginTop: 15
  },
  rubricHeader: {
    fontWeight: '500'
  },
  ...Containers
})

EStyleSheet.build()

export { styles }
