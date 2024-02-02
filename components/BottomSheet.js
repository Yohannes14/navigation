
import { View } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import { COLORS } from '../constants'

const BottomSheet = ({ bottomSheetRef, children }) => {
    return (
        <RBSheet
            ref={bottomSheetRef}
            height={300}
            openDuration={250}
            closeOnDragDown={true}
            closeOnPressBack={true}
            closeOnPressMask={false}
            customStyles={{
                wrapper: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                draggableIcon: {
                    backgroundColor: COLORS.gray,
                    width: 100
                },
                container: {
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30
                }
            }}
        >
            <View>{children}</View>

        </RBSheet>
    )
}

export default BottomSheet
