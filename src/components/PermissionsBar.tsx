import {observer} from 'mobx-react-lite'
import {FC} from 'react'
import {Text, View} from 'react-native'
import {useStore} from 'store'
import {Key} from './Key'

export const PermissionsBar: FC = observer(() => {
  let store = useStore()

  if (!!store.ui.query) {
    return null
  }

  if (store.ui.calendarAuthorizationStatus === 'notDetermined') {
    return (
      <View className="subBg flex-row justify-end gap-1 py-2 px-4">
        <Text className={'text-xs darker-text mr-1'}>
          Grant calendar access
        </Text>
        <Key symbol={'⏎'} />
      </View>
    )
  }

  if (!store.ui.isAccessibilityTrusted) {
    return (
      <View className="subBg flex-row justify-end gap-1 py-2 px-4">
        <Text className={'text-xs darker-text mr-1'}>
          Grant accessibility access
        </Text>
        <Key symbol={'⏎'} />
      </View>
    )
  }

  return null
})
