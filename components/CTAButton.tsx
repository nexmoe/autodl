import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function () {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>
					加入等待列表
					<ArrowRightIcon className="ml-2 h-5 w-5" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="max-w-3xl">
				<AlertDialogHeader>
					<AlertDialogTitle>加入等待列表</AlertDialogTitle>
					<AlertDialogDescription>
						请在下方表单中填写您的信息,我们会在服务推出时第一时间通知您。
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className="flex-1 overflow-hidden h-full">
					<iframe
						className="h-[60vh]"
						src="https://fizuclq6u3i.feishu.cn/share/base/form/shrcnbxdW0U5iCqTxCXnokODfRe"
						width="100%"
						height="100%"
						frameBorder="0"
						marginHeight={0}
						marginWidth={0}
					>
						加载中...
					</iframe>
				</div>
				<AlertDialogFooter>
					<AlertDialogCancel>关闭</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
