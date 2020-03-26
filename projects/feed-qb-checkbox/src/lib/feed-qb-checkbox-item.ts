export class FeedQbCheckboxItem {
    value: string;
    groupId: any;
    label: string;
    checked: boolean;
    constructor(value: any, label: any, checked?: boolean) {
        this.value = value;
        this.label = label;
        this.checked = checked ? checked : false;
    }
}