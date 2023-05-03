import sass from "./SceletonSchema.module.scss";
import { Skeleton } from "@mui/material";

export const SceletonSchema = () => {
	return (
		<div className="container">
			<Skeleton variant="text" sx={{ fontSize: '3rem', width: "50%", margin: "0 auto" }} />
			<div className={sass.loaderWrapper}>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
				<div className={sass.loaderItem}>
					<Skeleton variant="rounded" sx={{ height: 350 }} />
					<Skeleton variant="text" sx={{ fontSize: '2rem', width: "80%", margin: "0 auto" }} />
				</div>
			</div>
		</div>
	)
}
