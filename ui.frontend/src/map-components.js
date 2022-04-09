import FormInput from './components/FormInput/FormInput'
import FormCheck from './components/FormCheck/FormCheck'
import FormSelect from './components/FormSelect/FormSelect'
import FormButton from './components/FormButton/FormButton'
import FormTitle from './components/FormTitle/FormTitle'
import TabTitle from './components/TabTitle/TabTitle'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/CheckboxVue/CheckBox'
import Tabs from './components/Tabs/Tabs'
import { withComponentMappingContext, MapTo } from '@mavice/aem-vue-editable-components'

// Text Component Mapping
MapTo('vue/components/form-input')(FormInput)
MapTo('vue/components/form-check')(FormCheck)
MapTo('vue/components/form-select')(FormSelect)
MapTo('vue/components/form-button')(FormButton)
MapTo('vue/components/form-title')(FormTitle)
MapTo('vue/components/tab-title')(TabTitle)
MapTo('vue/components/text')(Text)
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
MapTo('vue/components/checkbox-vue')(CheckBox)
MapTo('vue/components/tabs')(Tabs)